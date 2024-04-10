import { Vue } from 'exercise'


console.log('init', Vue)
const app = new Vue({
    el: "#app",
    data: {
        text: 0,
        text2: 'text2'
    },
    render() {
        console.log('render')
    }
})
console.log('app', app)
function test(el: HTMLButtonElement) {
    el.addEventListener('click', () => {
        console.log('click')
        app.text += 1

    })
}
export { test }

