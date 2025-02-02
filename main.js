/// dsgt.js
function A(height) {
    const urlPath = document.URL.slice(20)

    if (urlPath.startsWith('channels') || urlPath == 'app') {
        const btn = document.createElement('button')
        btn.innerHTML = 'GT'
        btn.style = `width:75px;height:${height};background-color:black;color:yellow`
        btn.onlick = function() {
            let A

            webpackChunkdiscord_app.push([
                [Symbol()], {}, 
                B => A = B.c
            ])
            webpackChunkdiscord_app.pop()

            navigator.clipboard.writeText(A.values().find(A => A?.exports?.default?.getToken).exports.default.getToken())
        }

        window.onload = function() {
            const observer = new MutationObserver(async function() {
                let e = document.querySelector('[data-list-id="guildsnav"]')
                while (!e) {
                    await new Promise(r => setTimeout(r, 1000))
                    e = document.querySelector('[data-list-id="guildsnav"]')
                }
    
                const e1 = e.children[1]
                e1.replaceChild(btn, e1.children[1])
                e.removeChild(e.children[2])
            })
        
            observer.observe(document.body.querySelector('#app-mount'), {childList: true})    
        }
    }
}
