class EventEmit {
  constructor() {
    this.listener = {}
  }
  on(eventName, fn) {
    if(!this.listener[eventName]){
        this.listener[eventName] =[]
    }
    this.listener[eventName].push(fn)
  }
  off(eventName, fn) {}
  emit(eventName, data) {
    this.listener[eventName].forEach(cal=>{
        if(cal){
            cal()
        }
    })
  }
}
