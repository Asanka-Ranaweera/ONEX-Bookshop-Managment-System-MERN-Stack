module.exports=(issueItem)=>{

  
  const today=new Date()
  
  return `
  
  <!doctype html>
  <html lang="en">

  <head>

  <meta charset="utf-8">
  <titel></titel>
  <style>
  
  .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }
    
    a {
      color: #5D6975;
      text-decoration: underline;
    }
    
    body {
      position: relative;
      width: 21cm;  
      height: 29.7cm; 
      margin: 0 auto; 
      color: #001028;
      background: #FFFFFF; 
      font-family: Arial, sans-serif; 
      font-size: 12px; 
      font-family: Arial;
    }
    
    header {
      padding: 10px 0;
      margin-bottom: 30px;
    }
    
    #logo {
      text-align: center;
      margin-bottom: 10px;
    }
    
    #logo img {
      width: 90px;
    }
    
    h1 {
      border-top: 1px solid  #5D6975;
      border-bottom: 1px solid  #5D6975;
      color: #5D6975;
      font-size: 2.4em;
      line-height: 1.4em;
      font-weight: normal;
      text-align: center;
      margin: 0 0 20px 0;
      background: url(dimension.png);
    }
    
    #project {
      float: left;
    }
    
    #project span {
      color: #5D6975;
      text-align: left;
      width: 52px;
      margin-right: 10px;
      display: inline-block;
      font-size: 0.8em;
    }
    
    #company {
      float: right;
      text-align: right;
    }
    
    #project div,
    #company div {
      white-space: nowrap;        
    }
    
    table {
      width: 50%;
      border-collapse: collapse;
      border-spacing: 0;
      margin-bottom: 20px;
    }
    
    table tr:nth-child(2n-1) td {
      background: #F5F5F5;
    }
    
    table th,
    table td {
      text-align: center;
    }
    
    table th {
      padding: 1px 1px;
      color: #5D6975;
      border-bottom: 1px solid #C1CED9;
      white-space: nowrap;        
      font-weight: normal;
    }
    
    table .service,
    table .desc {
      text-align: left;
      margin:0;
    }
    
    table td {
      padding: 12px;
      text-align: right;
    }
    
    table td.service,
    table td.desc {
      vertical-align: top;
    }
    
    table td.unit,
    table td.qty,
    table td.total {
      font-size: 1.2em;
    }
    
    table td.grand {
      border-top: 1px solid #5D6975;;
    }
    
    #notices .notice {
      color: #5D6975;
      font-size: 1.2em;
    }
    
    footer {
      color: #5D6975;
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #C1CED9;
      padding: 8px 0;
      text-align: center;
    }
  
  </style>

  </head>

  <body>

  <header class="clearfix">
  <div id="logo">
    <img src=".../frontend/src/components/Layouts/Images/Onex_logo.png">
  </div>
 
  <h1>Inventory Details</h1>


  <div id="project">
  <h2>Onex BookShop</h2>
  <div><span>Position : </span>Stock Controller</div>
  <div><span>Email : </span> <a href="mailto:john@example.com">info@ONEXbookshop.com</a></div>
    <div><span>Date :</span>${`${today}`}</div>
   
  </div>
</header>
<main>
  <table>
    <thead>
      <tr>
        <th class="service">ID</th>
        <th class="desc">Item Name</th>
        <th class="desc">Item Display Name</th>
        <th class="desc">Category</th>
        <th class="desc">Description</th>
        <th class="desc">Issue.Qnt</th>
        <th class="desc">Price</th>
        <th class="desc">Discount</th>
        <th class="desc">Sell.Price</th>
        <th class="desc">Author</th>
        <th class="desc">Ex. Date</th>

      </tr>
    </thead>
    <tbody>

   ${issueItem.map((item)=>{

      return(
          `   <tr>
          <td class="service">${item.Inventry_Item_ID}</td>
          <td class="desc">${item.Inventry_Item_Name}</td>
          <td class="desc">${item.Inventry_Item_DisplayName}</td>
          <td class="desc">${item.Inventry_Item_Category}</td>
          <td class="desc">${item.Inventry_Item_Description}</td>
          <td class="desc">${item.Inventry_Item_IssuedQuantity}</td>
          <td class="desc">${item.Inventry_Item_Price}</td>
          <td class="desc">${item.Inventry_Item_Discount}</td>
          <td class="desc">${item.Inventry_Item_SellPrice}</td>
          <td class="desc">${item.Inventry_Item_Author}</td>
          <td class="desc">${item.Inventry_Item_ExDate}</td>
      
          
          </tr>`
      )

   })}



   
    
    </tbody>
  </table>
  <div id="notices">
 
  
  </div>
</main>
<footer>

</footer>


  </body>

  </html>
  
  
  `




}