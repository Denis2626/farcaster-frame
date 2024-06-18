/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";
import { pinata } from "frog/hubs";
import Home from "@/app/components/Home";
import { vars } from "@/app/ui";
import VoteCard from "@/app/components/VoteCard";
import StatsCard from "@/app/components/StatsCard";
import ErrorCard from "@/app/components/ErrorCard";

// In-memory storage for votes
let voteCounts = {
  yes: 0,
  no: 0,
};

// Map to store user votes
let userVotes = new Map<number, { vote: string; timestamp: string }>();

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  // Supply a Hub to enable frame verification.
  verify: "silent",
  hub: pinata(),
  ui: {
    vars,
  },
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame("/", (c) => {
  return c.res({
    image: <Home />,
    intents: [
      <Button value="yes" action="/vote">
        Yes
      </Button>,
      <Button value="no" action="/vote">
        No
      </Button>,
    ],
  });
});

app.frame("/vote", (c) => {
  const { frameData, buttonValue, verified } = c; // Assume userId is passed in the context

  const { fid } = frameData || {};

  //TODO SEND TO UNVERIFIED CARD
  if (!verified || !fid) {
    return c.res({
      image: <ErrorCard message="Unverified User" />,
      intents: [
        <Button value="home" action="/">
          Back
        </Button>,
      ],
    });
  }

  if (!userVotes.has(fid)) {
    if (buttonValue === "yes") {
      voteCounts.yes += 1;
    } else if (buttonValue === "no") {
      voteCounts.no += 1;
    }
    const timestamp = new Date().toISOString();
    userVotes.set(fid!, { vote: buttonValue!, timestamp });
  }

  return c.res({
    image: <VoteCard userVote={{ ...userVotes.get(fid), fid: fid.toString() }} />,
    intents: [
      <Button value="stats" action="/stats">
        Stats
      </Button>,
    ],
  });
});

app.frame("/stats", (c) => {
  const { verified, frameData } = c; // Assume userId is passed in the context
  const { fid } = frameData || {};

  //TODO SEND TO UNVERIFIED CARD
  if (!verified || !fid) {
    return c.res({
      image: <ErrorCard message="Unverified User" />,
      intents: [
        <Button value="home" action="/">
          Back
        </Button>,
      ],
    });
  }

  if (!userVotes.has(fid)) {
    return c.res({
      image: <ErrorCard message="Vote to get stats" />,
      intents: [
        <Button value="home" action="/">
          Back
        </Button>,
      ],
    });
  }

  return c.res({
    image: (
      <StatsCard
        voteCounts={voteCounts}
      />
    ),
    intents: [
      <Button value="home" action="/">
        Back
      </Button>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
