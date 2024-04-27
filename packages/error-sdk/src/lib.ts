// 发布订阅

class Subscribe {
  dep: Map<string, any[]> = new Map();

  on(eventName: string, callback: any) {
    if (!this.dep.has(eventName)) {
      this.dep.set(eventName, [callback]);
    } else {
      this.dep.get(eventName)!.push(callback);
    }
  }

  notify<D = any>(eventName: string, data: D) {
    if(this.dep.has(eventName)) {
        this.dep.get(eventName)?.forEach(cb => cb(data))
    }
  }
}


// xhr
export function xhr(method: MethodTypes, url: string, data: any): Promise<any> {
  return new Promise((rs, rj) => {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      if (method === MethodTypes.POST) {
        xhr.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded',
        );
        xhr.send(data);
      } else {
        xhr.send();
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          rs(JSON.parse(xhr.response));
        } else {
          new Error(xhr.response);
        }
      };
    } catch (error) {
      rj(error);
    }
  });
}