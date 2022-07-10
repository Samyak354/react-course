import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

let AgentList = [
   {
      name: "Neon",
      signatureAbilties: "quick speed",
      basicAbilities: "flash, wall",
      ultimate: "finger blaster"
   },
   {
      name: "Brimstone",
      signatureAbilties: "brimstim",
      basicAbilities: "Molly, Smokes",
      ultimate: "Orbital Strike"
   },
   {
      name: "Raze",
      signatureAbilties: "satchells, boombot",
      basicAbilities: "grenade",
      ultimate: "showstopper"
   }
]


function Agents() {
   return(
      <section className='Agents'>
         {AgentList.map((agents) => {
            const{ name, signatureAbilties, basicAbilities, ultimate } = agents;
            return (
               <div>
               <h1>{name}</h1>
               <h1>{signatureAbilties}</h1>
               <h1>{basicAbilities}</h1>
               <h1>{ultimate}</h1>
               </div>
            )
         })}

      </section>
   )
}

ReactDom.render(<Agents />, document.querySelector("#root"))