const paths=[
'<path d="M5 18 17 6l3 3L8 21H5v-3ZM14 9l3 3M5 5h5M5 9h2"/>',
'<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/>',
'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 4 14 4 14 0V6M5 12c0 4 14 4 14 0"/>',
'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
'<path d="M7 18a5 5 0 0 1-1-10 6 6 0 0 1 11-2 6 6 0 0 1 1 12M12 21V11m-4 4 4-4 4 4"/>',
'<path d="M4 19V5m0 14h16M8 15l4-5 4 2 4-6"/>',
]
export function softwareOrbit(){
 const labels=['Discover','Build','Connect','Validate','Launch','Evolve']
 const positions=[[240,64],[392,152],[392,328],[240,416],[88,328],[88,152]]
 return `<div class="ed-software-orbit"><svg viewBox="0 0 480 480" role="img" aria-label="The software lifecycle: discover, build, connect, validate, launch, and evolve."><defs><radialGradient id="orbit-halo"><stop stop-color="#dceaf0" stop-opacity=".8"/><stop offset="1" stop-color="#fafaf8" stop-opacity="0"/></radialGradient><radialGradient id="orbit-ball"><stop stop-color="#fff"/><stop offset=".35" stop-color="#d4f4f2"/><stop offset="1" stop-color="#5e99a5"/></radialGradient></defs><circle cx="240" cy="240" r="235" fill="url(#orbit-halo)"/><g fill="none" stroke="#b9cbd3"><circle cx="240" cy="240" r="176"/><circle cx="240" cy="240" r="123" stroke-dasharray="2 7"/><path d="M240 64 392 328 88 328ZM392 152 240 416 88 152Z" opacity=".48"/><path d="M240 64v352M88 152l304 176M392 152 88 328" opacity=".3"/></g><circle class="ed-orbit-traveler" r="10" fill="url(#orbit-ball)" stroke="#699ba5" stroke-width=".6"/><g class="ed-orbit-core"><circle cx="240" cy="240" r="65" fill="#fafcfb" stroke="#d3e0e3"/><text x="240" y="238" text-anchor="middle" class="ed-orbit-logo">e.</text><text x="240" y="263" text-anchor="middle" class="ed-orbit-caption">IDEA → IMPACT</text></g>${positions.map(([x,y],i)=>`<g class="ed-orbit-node" style="--node:${i}" transform="translate(${x} ${y})"><circle r="29" fill="#fbfcfa" stroke="#c6d6dd"/><g transform="translate(-12 -12)" fill="none" stroke="#526e7c" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${paths[i]}</g><text y="49" text-anchor="middle">${labels[i]}</text></g>`).join('')}</svg><button class="ed-particle-control" data-orbit-toggle aria-pressed="false" aria-label="Toggle software lifecycle animation">Pause motion Ⅱ</button></div>`
}
