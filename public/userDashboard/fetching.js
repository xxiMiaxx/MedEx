var config = {
  apiKey: "AIzaSyDQLxQEkY_lbpnQQi_JS8MXqCxgMIZr6eY",
  authDomain: "medex-e6e1f.firebaseapp.com",
  databaseURL: "https://medex-e6e1f.firebaseio.com",
  projectId: "medex-e6e1f",
  storageBucket: "medex-e6e1f.appspot.com",
  messagingSenderId: "1006108228892"
};
firebase.initializeApp(config);

var webUsers = firebase.database().ref().child("webUsers");
var Rol;
firebase.auth().onAuthStateChanged(user => {
  if(!user) { //If User is not logged in, redirect to login page
    window.location = '/Login_v2/index.html'; }
    webUsers.once("value",function(snap) {
      Rol = snap.child(user.uid).child("Role").val();
      // console.log("Rol   "+Rol);
      if (Rol != "Physician") {
        if (Rol=="Pharmacist") window.location = 'pharmDashboard.html';
         else if (Rol=="Admin") window.location = 'AdminDashboard.html'; }
    });
});

function logout(){

  firebase.auth().signOut();
  console.log("user logged out");
  window.location = '/Login_v2/index.html';
}



var root = firebase.database().ref().child("users");
var counter = 0;




root.on("child_added", snap => {
  var role = snap.child("Role").val();
  if (role=="Patient") {
    counter++;
  var MRN = snap.child("MRN").val();
  var Name = snap.child("Name").val();
  var Gender = snap.child("Gender").val();
  var age = snap.child("Age").val();
  var phone = snap.child("PhoneNo").val();
  var AddressNode = snap.child("Address");
  var MH = snap.child("MedicalHistory").val();

  var PodtalCode = AddressNode.child("Postal Code").val();
  var Address = AddressNode.child("BuildingNo").val()+", "
  +AddressNode.child("AdditionalNo").val()+", "
  +AddressNode.child("Street Name").val()+", "
  +AddressNode.child("Neighborhood").val()+", "
  +AddressNode.child("City").val();
  var HTMLtxt = '<tr><td class="serial">'+counter+'.</td><td id="MRN'+counter+'">'+MRN+'</td><td><span class="name">'+Name+'</span></td><td><span class="product">'+Gender+'</span></td><td><a href="#" onclick="patientProfile(\''+Name + '\',\''+ MRN + '\',\''+Gender +'\',\''+ age + '\',\''+ phone+ '\',\''+MH+'\',\''+Address+'\',\''+PodtalCode+'\')"><button type="button" class="btn btn-outline-primary btn-sm btn-outline-profile"><i class="fa fa-user"></i>&nbsp; Patient Profile</button></a></td></tr>';

   $("#tableBody").append(HTMLtxt);
 }
});
//<a href="/patientProfile.html?MRN='+MRN+'" onclick="patientProfile(\''+Name + '\',\''+ MRN + '\',\''+Gender +'\',\''+ age + '\',\''+ phone+'\')">
//$("#btnEdit").click(function(){

var P_mrn;
function patientProfile(Name, mrn, gender, age, phone, MH, address, postalCode){
  console.log(age);
    $("div#patname h2").text(Name);
    $("li.li1").find('font').html(age);
    $("li.li2").find('font').html(gender);
    $("li.li3").find('font').html(mrn);
    $("li.li4").find('font').html(phone);
    $("li.li5").find('font').html(MH);
    $("li.li6").find('font').html(address);
    $("li.li7").find('font').html(postalCode);
    P_mrn=mrn;
  $("#patientLilProfile").show();




}

function goToForm(){
  document.getElementById("a").href="../Prescription/AddPrescriptionForm.html?MRN="+P_mrn;

}
//$('button#changeText').click(function() {
//   $('li.select2-selection__choice').find('font').html('HELLO WORLD');
// });
// $("#patName").text("yes");

//style="background: #00B2F4; border-color: #00B2F4"
//<button type="button" class="btn btn-primary btn-sm">Primary</button>
//<span style="background: #00B2F4" class="badge badge-complete">Patient Profile</span>
