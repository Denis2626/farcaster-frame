/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
import { pinata } from 'frog/hubs'

// In-memory storage for votes
let voteCounts = {
  yes: 0,
  no: 0
};

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  //hub: pinata()
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        <p>There will be over a 10,000 Kramer predictions before 6/29 midnight</p>
        </div>
    ), 
    intents: [
      <Button value="yes" action="/voted">Yes</Button>,
      <Button value="no" action="/voted">No</Button>,
    ],
  })
})

app.frame('/voted', (c) => {
  const { buttonValue } = c
  if (buttonValue === 'yes') {
    voteCounts.yes += 1
  } else if (buttonValue === 'no') {
    voteCounts.no += 1
  }

  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
      You voted: {buttonValue}
      Yes: {voteCounts.yes}
      No: {voteCounts.no}
    </div>
    
    )
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
