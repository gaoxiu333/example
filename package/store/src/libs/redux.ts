// @ts-nocheck
/**
 * 核心原则为：
 * 单一数据原则
 * 订阅发布模式
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.event[event].push(listener);
  }
  emit(event, ...args) {
    const events = this.events[event];
    if (events) {
      events.forEach((event) => {
        event(args);
      });
    }
  }
  off(event, listenerToRemove) {
    const listeners = this.events[event]
    if(listeners){
        this.events[event] = listeners.filter(listener=>listener !== listenerToRemove)
    }
  }
  once(event, listener) {
    const wrapFn = (...args)=>{
        listener.apply(this,args)
        this.off(event,wrapFn)
    }
    this.on(event,wrapFn)
  }
}

console.log("eventEmitter", EventEmitter);
