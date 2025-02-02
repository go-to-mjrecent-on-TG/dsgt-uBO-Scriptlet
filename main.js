/// dsgt.js
{
    const urlPath = document.URL.slice(20)

    if (urlPath.startswith('channels') || urlPath == 'app') {
        window.onload = async function() {
            let e = document.querySelector('[data-list-id="guildsnav"]')
            while (!e) {
                await new Promise(r => setTimeout(r, 1000))
                e = document.querySelector('[data-list-id="guildsnav"]')
            }

            const btn = document.createElement('button')
            btn.innerHTML = 'GT'
            btn.style = 'width: 75px; height: 80px; background-color: black; color: yellow'
            btn.onlick = function() {
                let A

                webpackChunkdiscord_app.push([
                    [Symbol()], {}, 
                    B => A = B.c
                ])
                webpackChunkdiscord_app.pop()

                navigator.clipboard.writeText(A.values().find(A => A?.exports?.default?.getToken).exports.default.getToken())
            }
            const e1 = e.children[1]
            e1.replaceChild(btn, e1.children[1])
            e.removeChild(e.children[2])
        }
    }
    
}
