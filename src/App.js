import React, { Component } from 'react'
import { voteResult } from './vote-result'
import { calculatePartyList } from 'thailand-party-list-calculator'
import NivoStackedBar from './components/NivoStackedBar';
import RechartsStackedBar from './components/RechartsStackedBar';

class App extends Component {
  render() {
    // options.data = voteResult
    const parties = calculatePartyList(voteResult)

    const nivoData = parties.reduce((accu, party) => {
      if ((party.electedMemberCount + party.partyListMemberCount) > 0)
        accu.push({
            label: party.id,
            "สส เขต": party.electedMemberCount,
            "สส ปาร์ตี้": party.partyListMemberCount
        })
      return accu
    }, [])
   
    return (
      <div style={{height: 400}}>
        <NivoStackedBar data={nivoData}></NivoStackedBar>
        <RechartsStackedBar data={nivoData}></RechartsStackedBar>
      </div>
    )
  }
}

export default App
