<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>WISSEM WEB</title>
	<link rel="stylesheet" href="/css/style.css">
</head>
<body>
	<header>
		<p>HEADER</p>
		<div class="menu">
			<ul>
				<li>About us</li>
				<li>Products</li>
				<li>Contacts</li>
			</ul>
		</div>
	</header>
	<div class="alert"><strong>Вы прочитали это важное сообщение</strong></div>
	<section>
		<p>
			<h1>Hello World!</h1>
		</p>
  	<button type="button" onclick="myFunction()">Set background color</button>
  	<div id="table">
  		<table>
	  		<tr>
	  			<td>11</td>
	  			<td>21</td>
	  			<td>31</td>
	  			<td>41</td>
	  			<td>51</td>
	  		</tr>
	  		<tr>
	  			<td>12</td>
	  			<td>22</td>
	  			<td>32</td>
	  			<td>42</td>
	  			<td>52</td>
	  		</tr>
	  		<tr>
	  			<td>13</td>
	  			<td>23</td>
	  			<td>33</td>
	  			<td>43</td>
	  			<td>53</td>
	  		</tr>
	  		<tr>
	  			<td>14</td>
	  			<td>24</td>
	  			<td>34</td>
	  			<td>44</td>
	  			<td>54</td>
	  		</tr>
	  		<tr>
	  			<td>15</td>
	  			<td>25</td>
	  			<td>35</td>
	  			<td>45</td>
	  			<td>55</td>
	  		</tr>
	  	</table>
  	</div>
	</section>
	<section>
		<div id = "content-holder">
			<div id = "content">
				<p>content is here</p>
			</div>
		</div>
	</section>
	<footer>
		<p>FOOTER</p>
	</footer>
	<form name="search">
    <label>Поиск по сайту:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Искать!">
  </form>

  <hr>

  <form name="search-person">
    Поиск по посетителям:
    <table id="age-table">
      <tr>
        <td>Возраст:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">до 18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">более 50</label>
        </td>
      </tr>

      <tr>
        <td>Дополнительно:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
        </td>
      </tr>

    </table>

    <input type="submit" value="Искать!">
  </form>
  <div id="elem" class="class1" about="Elephant" data-user-location = "Teremkivska str.">TeremkivsksaSTR</div>

	<!-- Scripts -->

	<!-- <script src='/js/DocumentEventsInterface/1_DocumentPageObjects/1_dom.js'></script> -->
	<!-- <script src='/js/DocumentEventsInterface/1_DocumentPageObjects/2_nodeProperties.js'></script> -->
	<!-- <script src='/js/DocumentEventsInterface/1_DocumentPageObjects/3_polyfilles.js'></script> -->
	<script src='js/DocumentEventsInterface/1_DocumentPageObjects/4_elementsManipulation.js'></script>
	
	<!-- Scripts -->
</body>
</html>