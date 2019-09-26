const boardingCard = require('./boardingCard.json')

const sortBoardingCards = (cards) => {
  return cards.sort((a, b) => new Date(a.date) - new Date(b.date))
}

const printDetailsForSortedBoardingCards = (cards) => {
  for (c of cards) {

    c.seatAssignment = c.seatAssignment === "" ? "No seat Assignment" : "Seat Number " + c.seatAssignment
    c.gate = c.gate === "" ? "" : "Gate " + c.gate
    console.log(`Trip: Take ${c.meansOfTransportation} ${c.transportNumber} from ${c.origin} to ${c.destination}. ${c.gate} ${c.seatAssignment} ${c.baggageDetails} \n`)

  }
}

let sortedBoardingCards = sortBoardingCards(boardingCard)
printDetailsForSortedBoardingCards(sortedBoardingCards)

