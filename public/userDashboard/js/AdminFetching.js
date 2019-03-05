var config = {
  apiKey: "AIzaSyDQLxQEkY_lbpnQQi_JS8MXqCxgMIZr6eY",
  authDomain: "medex-e6e1f.firebaseapp.com",
  databaseURL: "https://medex-e6e1f.firebaseio.com",
  projectId: "medex-e6e1f",
  storageBucket: "medex-e6e1f.appspot.com",
  messagingSenderId: "1006108228892"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if(!user) {
    window.location = '/Login_v2/index.html';
    //If User is not logged in, redirect to login page
  }
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
  if (role=="Driver") {
    counter++;
  var area = snap.child("DeliveryArea").val();
  var Name = snap.child("Name").val();
  var PhoneNo = snap.child("PhoneNo").val();
  var email = snap.child("Email").val();
  var HTMLtxt = '<tr><td class="serial">'+counter+'.</td><td id="MRN'+counter+'">'+Name+'</td><td><span class="name">'
  +area+'</span></td><td><span class="product">'+PhoneNo+'</span></td><td><span class="product">'+email+'</span></td><td><a href="/driverProfile.html?PhoneNo='+PhoneNo
  +'"><span style="background: #00B2F4" class="badge badge-complete">Drivers Profile</span></a></td></tr>';

   $("#tableBody").append(HTMLtxt);
 }
});

// function myFunction() {
//     var input, filter, tb, tr, a, i, txtValue, j, arr[];
//     input = document.getElementById("myInput");
//     filter = input.value;
//     tb = document.getElementById("tableBody");
//     tr = tb.getElementsByTagName("tr");
//     j = 0;
//     arr = arr[tr.length];
//     for (i = 1; i <= tr.length; i++) {
//         // a = tr[i].getElementById("MRN")[0];
//         var tdid = "MRN"+i;
//         console.log(tdid);
//         a = document.getElementById(tdid);
//         console.log(a);
//         // txtValue = a.innerText;
//         arr[i-1] = a.innerText;
//         // console.log(txtValue.toUpperCase().indexOf(filter));
//         // if (txtValue.indexOf(j++) == filter) {
//         var result = arr.filter(function(input){
//           return input;
//           console.log(arr);
//         })
//         //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         //     tr[i-1].style.display = "none";
//         // } else {
//         //     tr[i-1].style.display = "";
//         // }
//     }
// }
//
        // jQuery(document).ready(function($) {
        //     "use strict";
        //     // Pie chart flotPie1
        //     var piedata = [
        //         { label: "Desktop visits", data: [[1,32]], color: '#5c6bc0'},
        //         { label: "Tab visits", data: [[1,33]], color: '#ef5350'},
        //         { label: "Mobile visits", data: [[1,35]], color: '#66bb6a'}
        //     ];
        //     $.plot('#flotPie1', piedata, {
        //         series: {
        //             pie: {
        //                 show: true,
        //                 radius: 1,
        //                 innerRadius: 0.65,
        //                 label: {
        //                     show: true,
        //                     radius: 2/3,
        //                     threshold: 1
        //                 },
        //                 stroke: {
        //                     width: 0
        //                 }
        //             }
        //         },
        //         grid: {
        //             hoverable: true,
        //             clickable: true
        //         }
        //     });
        //     // Pie chart flotPie1  End
        //     // cellPaiChart
        //     var cellPaiChart = [
        //         { label: "Direct Sell", data: [[1,65]], color: '#5b83de'},
        //         { label: "Channel Sell", data: [[1,35]], color: '#00bfa5'}
        //     ];
        //     $.plot('#cellPaiChart', cellPaiChart, {
        //         series: {
        //             pie: {
        //                 show: true,
        //                 stroke: {
        //                     width: 0
        //                 }
        //             }
        //         },
        //         legend: {
        //             show: false
        //         },grid: {
        //             hoverable: true,
        //             clickable: true
        //         }
        //     });
        //     // cellPaiChart End
        //     // Line Chart  #flotLine5
        //     var newCust = [[0, 3], [1, 5], [2,4], [3, 7], [4, 9], [5, 3], [6, 6], [7, 4], [8, 10]];
        //     var plot = $.plot($('#flotLine5'),[{
        //         data: newCust,
        //         label: 'New Data Flow',
        //         color: '#fff'
        //     }],
        //     {
        //         series: {
        //             lines: {
        //                 show: true,
        //                 lineColor: '#fff',
        //                 lineWidth: 2
        //             },
        //             points: {
        //                 show: true,
        //                 fill: true,
        //                 fillColor: "#ffffff",
        //                 symbol: "circle",
        //                 radius: 3
        //             },
        //             shadowSize: 0
        //         },
        //         points: {
        //             show: true,
        //         },
        //         legend: {
        //             show: false
        //         },
        //         grid: {
        //             show: false
        //         }
        //     });
        //     // Line Chart  #flotLine5 End
        //     // Traffic Chart using chartist
        //     if ($('#traffic-chart').length) {
        //         var chart = new Chartist.Line('#traffic-chart', {
        //           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        //           series: [
        //           [0, 18000, 35000,  25000,  22000,  0],
        //           [0, 33000, 15000,  20000,  15000,  300],
        //           [0, 15000, 28000,  15000,  30000,  5000]
        //           ]
        //       }, {
        //           low: 0,
        //           showArea: true,
        //           showLine: false,
        //           showPoint: false,
        //           fullWidth: true,
        //           axisX: {
        //             showGrid: true
        //         }
        //     });
        //         chart.on('draw', function(data) {
        //             if(data.type === 'line' || data.type === 'area') {
        //                 data.element.animate({
        //                     d: {
        //                         begin: 2000 * data.index,
        //                         dur: 2000,
        //                         from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        //                         to: data.path.clone().stringify(),
        //                         easing: Chartist.Svg.Easing.easeOutQuint
        //                     }
        //                 });
        //             }
        //         });
        //     }
        //     // Traffic Chart using chartist End
        //     //Traffic chart chart-js
        //     if ($('#TrafficChart').length) {
        //         var ctx = document.getElementById( "TrafficChart" );
        //         ctx.height = 150;
        //         var myChart = new Chart( ctx, {
        //             type: 'line',
        //             data: {
        //                 labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
        //                 datasets: [
        //                 {
        //                     label: "Visit",
        //                     borderColor: "rgba(4, 73, 203,.09)",
        //                     borderWidth: "1",
        //                     backgroundColor: "rgba(4, 73, 203,.5)",
        //                     data: [ 0, 2900, 5000, 3300, 6000, 3250, 0 ]
        //                 },
        //                 {
        //                     label: "Bounce",
        //                     borderColor: "rgba(245, 23, 66, 0.9)",
        //                     borderWidth: "1",
        //                     backgroundColor: "rgba(245, 23, 66,.5)",
        //                     pointHighlightStroke: "rgba(245, 23, 66,.5)",
        //                     data: [ 0, 4200, 4500, 1600, 4200, 1500, 4000 ]
        //                 },
        //                 {
        //                     label: "Targeted",
        //                     borderColor: "rgba(40, 169, 46, 0.9)",
        //                     borderWidth: "1",
        //                     backgroundColor: "rgba(40, 169, 46, .5)",
        //                     pointHighlightStroke: "rgba(40, 169, 46,.5)",
        //                     data: [1000, 5200, 3600, 2600, 4200, 5300, 0 ]
        //                 }
        //                 ]
        //             },
        //             options: {
        //                 responsive: true,
        //                 tooltips: {
        //                     mode: 'index',
        //                     intersect: false
        //                 },
        //                 hover: {
        //                     mode: 'nearest',
        //                     intersect: true
        //                 }
        //             }
        //         } );
        //     }
        //     //Traffic chart chart-js  End
        //     // Bar Chart #flotBarChart
        //     $.plot("#flotBarChart", [{
        //         data: [[0, 18], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,4], [14,6],[16,15], [18, 9],[20,17], [22,7],[24,4], [26,9],[28,11]],
        //         bars: {
        //             show: true,
        //             lineWidth: 0,
        //             fillColor: '#ffffff8a'
        //         }
        //     }], {
        //         grid: {
        //             show: false
        //         }
        //     });
        //     // Bar Chart #flotBarChart End
        // });
