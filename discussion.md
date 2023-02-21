# Classes
class Model {
  frequency
  dataArray
  getDataArray()
  getDataSize()
  generateRandomArray(size)
  setItem(index,value)
  getItem(index)
  getFrequency()
  getDelay()
  increaseFrequency()
  decreaseFrequency()
}
class View {
  displayGraph(dataArray)
}
// Sort the data
class SortingService {
  start()
  service();
  stop()
}
// Updates graph view regularly
class GraphUpdaterService {
  start()
  service()
  stop()
}
class Controller {
  model
  view
  sortingService
  graphUpdaterService
  init() // generate random array, set up all event listeners
  /* Event listener functions*/
  onStartClick() // start SortingService, start GraphUpdaterService,
  onGenerateArrayClick() // to reset the current sorting and generate new random array
  onIncreaseFrequencyClick()
  onDecreaseFrequencyClick()
  /* End Event Listener functions */
}
# Entry point of our program
document.body.addEventListener('load', () => {
  const c = new Controller
  c.init()
})




