const questions=[
{q:'A valid contract under the Contracts Act 1950 requires:',o:['Offer, acceptance, consideration and legal enforceability','Only a written agreement','A company seal only','Witnesses only'],a:0,e:'A contract arises from a valid agreement enforceable by law.'},
{q:'An offer becomes a promise when:',o:['Accepted','Advertised','Printed','Signed by a witness'],a:0,e:'Acceptance converts a proposal into a promise.'},
{q:'Acceptance must be:',o:['Absolute and unqualified','Delayed','Secret','Conditional on new terms'],a:0,e:'Section 7 requires absolute acceptance.'},
{q:'Consideration refers to:',o:['Something of value exchanged','A polite discussion','Registration only','A company stamp'],a:0,e:'Consideration is value given for a promise.'},
{q:'A contract with consent obtained by coercion is:',o:['Voidable','Automatically void','Always valid','Illegal'],a:0,e:'Lack of free consent makes it voidable.'},
{q:'A void agreement is:',o:['Not enforceable by law','Enforceable until cancelled','Always criminal','Valid forever'],a:0,e:'Void agreements have no legal effect.'},
{q:'Which best describes a voidable contract?',o:['Binding until rescinded by the aggrieved party','Never enforceable','Same as void','Requires court registration'],a:0,e:'The innocent party may affirm or rescind it.'},
{q:'A minor generally is:',o:['Not competent to contract','Always competent','A company director','Automatically liable'],a:0,e:'Capacity is required for a valid contract.'},
{q:'Which situation may create a voidable contract?',o:['Misrepresentation','Valid bargain','Proper acceptance','Lawful consideration'],a:0,e:'Misrepresentation affects free consent.'},
{q:'Ali buys a laptop after a seller falsely claims it is new. The contract is:',o:['Voidable at Ali’s option','Void immediately','Fully valid with no remedy','Illegal'],a:0,e:'False statements may amount to misrepresentation.'}
];
let c=0,s=0,locked=false; const $=id=>document.getElementById(id);
function show(x){document.querySelectorAll('.screen').forEach(a=>a.classList.remove('active'));$(x).classList.add('active');}
playBtn.onclick=()=>show('instructions'); startGame.onclick=()=>{show('game');loadQ();}; homeBtn.onclick=()=>show('home'); restartBtn.onclick=()=>location.reload();
function loadQ(){locked=false;continueBtn.classList.add('hidden');feedback.innerHTML='';progress.textContent=`Room ${c+1}/10`;score.textContent=`Score: ${s}`;roomTitle.textContent=`Locked Room ${c+1}`;question.textContent=questions[c].q;options.innerHTML='';questions[c].o.forEach((t,i)=>{let b=document.createElement('button');b.className='option';b.textContent=t;b.onclick=()=>answer(i);options.appendChild(b);});}
function answer(i){if(locked)return; const q=questions[c]; if(i===q.a){locked=true;s+=10;feedback.innerHTML='✅ Correct! '+q.e;score.textContent=`Score: ${s}`;continueBtn.classList.remove('hidden');}else{feedback.innerHTML='❌ Incorrect. Try again. '+q.e;}}
continueBtn.onclick=()=>{c++; if(c>=questions.length){show('complete');result.textContent=`Final Score: ${s}/100. You completed all contract challenges and reviewed key concepts on valid, void and voidable contracts.`;} else loadQ();};