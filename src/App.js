import React, { Component } from 'react'
import StackedColumnChart from './components/StackedColumnChart'
import { options } from './chart-options'
import { voteResult } from './vote-result'
import { calculatePartyList } from 'thailand-party-list-calculator'

class App extends Component {
  render() {
    // options.data = voteResult
    const parties = calculatePartyList(voteResult)
    const bar1 = {
      type: "stackedColumn",
      name: "สส เขต",
      showInLegend: true,
      dataPoints: parties.reduce((accu, party) => {
        if ((party.electedMemberCount + party.partyListMemberCount) > 0)
        accu.push({
            label: party.id,
            y: party.electedMemberCount
        })
        return accu
      }, [])
    }

    const bar2 = {
      type: "stackedColumn",
      name: "สส ปาร์ตี้",
      showInLegend: true,
      indexLabel: "#total",
      indexLabelPlacement: "outside",
      dataPoints: parties.reduce((accu, party) => {
        if ((party.electedMemberCount + party.partyListMemberCount) > 0)
        accu.push({
            label: party.id,
            y: party.partyListMemberCount
        })
        return accu
      }, [])
    }

    options.data = [bar1, bar2]

    console.log(parties)
    return (
		<StackedColumnChart options={options}/>
    )
  }
}

export default App
