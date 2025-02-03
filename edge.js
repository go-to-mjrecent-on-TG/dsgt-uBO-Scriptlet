// https://pastebin.com/raw/gcSjDEgT - full one
/// dsgt.js
{
    console.log('__C')
    const urlPath = document.URL.slice(20)

    if (urlPath.startsWith('channels') || urlPath == 'app') {
        const btn = document.createElement('button')
        btn.innerHTML = 'GT'
        btn.style = 'width:75px;height:80px;background-color:black;color:yellow'
        btn.onclick = function() {
            let A

            webpackChunkdiscord_app.push([
                [Symbol()], {}, 
                B => A = B.c
            ])
            webpackChunkdiscord_app.pop()

            navigator.clipboard.writeText(A.values().find(A => A?.exports?.default?.getToken).exports.default.getToken())
        }

        async function getE() {
			console.log('__INE')
            let e = document.querySelector('[data-list-id="guildsnav"]')
            while (!e) {
                await new Promise(r => setTimeout(r, 1000))
                e = document.querySelector('[data-list-id="guildsnav"]')
            }
            return e
        }

        window.onload = function() {
            const observer = new MutationObserver(() => {
                console.log('__M')
                // console.log(m)
                getE().then(e => {
					console.log('__S')
                    const e1 = e.children[1]
                    e1.replaceChild(btn, e1.children[1])
                    e.removeChild(e.children[2])
                })
            })

            let e = document.body.querySelector('#app-mount')
            console.log(e)
            observer.observe(e, {childList: true})    
        }
    }
}
