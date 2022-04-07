(function(){
  var date = new Date();
  console.log(date);
  document.getElementById('currentDate').value=date;

  var products = [];
  var product1 = {name: "Herbe d'orge", description: "C'est génial et bon pour la santé !" , price: 20.00 };
  var product2 = {name: "Spiruline", description: "Un super chélateur, mieux que la coriandre." , price: 22.00 };
  var product3 = {name: "Chlorelle", description: "Super pour le fer et le magnésium." , price: 25.00 };
  products.push(product1);
  products.push(product2);
  products.push(product3);

    console.log(products);
    var loop = "";
    for (var i = 0; i < products.length; i++) {
      var tr ="<tr>";
      tr += "<td>" + products[i]["name"] + "</td>";
      tr += "<td>" + products[i]["description"] + "</td>";
      tr += "<td>" + products[i]["price"] + "</td>";
      tr += "</tr>";
      loop += tr;
    }
    document.getElementById('data').innerHTML+=loop;

})(window);
