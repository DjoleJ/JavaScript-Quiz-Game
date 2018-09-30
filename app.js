
(function() {
 
 function Question(q, answers, corrA, desc) {
    
    this.q = q;
    this.answers = answers;
    this.corrA = corrA;
    this.desc = desc;
    
}

var q1 = new Question('What is the capital city of France?', ['London', 'Rome', 'Paris', 'Madrid'], 2, 'Paris is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and a population of 2,206,488. With 200,000 inhabitants in 1328, Paris, then already the capital of France, was the most populous city of Europe');

var q2 = new Question('What is the capital city of Australia?', ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'], 3, 'Canberra is the capital city of Australia. With a population of 403,468, it is Australia\'s largest inland city and the eighth-largest city overall. The city is located at the northern end of the Australian Capital Territory (ACT), 280 km (170 miles) south-west of Sydney, and 660 km (410 miles) north-east of Melbourne.');

var q3 = new Question('What is the capital city of USA?', ['Washington, D.C.', 'New York City', 'Los Angeles', 'Chicago'], 0, 'Washington, D.C., formally the District of Columbia and commonly referred to as Washington or D.C., is the capital of the United States of America. Founded after the American Revolution as the seat of government of the newly independent country, Washington was named after George Washington, first President of the United States and Founding Father.');

var q4 = new Question('What is the capital city of Russia?', ['Sankt Peterburg', 'Moscow', 'Kiev', 'Volgograd'], 1, 'Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.1 million within the urban area. Moscow is one of Russia\'s two federal cities, along with St Petersburg. Moscow is a major political, economic, cultural, and scientific centre of Russia and Eastern Europe, as well as the largest city (both by population and by area) entirely on the European continent.');

var q5 = new Question('What is the capital city of Germany?', ['Berlin', 'Frankfurt', 'Munich', 'Keln'], 0, 'Berlin is the capital and largest city of Germany by both area and population, and its 3,711,930 (2017) inhabitants make it the second most populous city proper of the European Union after London. The city is one of Germany\'s 16 federal states, and it is surrounded by the state of Brandenburg, whose capital of Potsdam is contiguous with Berlin');

var q6 = new Question('What is the capital city of China?', ['Shaghai', 'Hong Kong', 'Beijing', 'Tokyo'], 2, 'Beijing, formerly romanized as Peking, is the capital of the People\'s Republic of China, the world\'s third most populous city proper, and most populous capital city. The city, located in northern China, is governed as a municipality under the direct administration of central government with 16 urban, suburban, and rural districts.');

var q7 = new Question('What is the capital city of Brazil?', ['Sao Paolo', 'Rio De Janeiro', 'Salvador', 'Brasilia'], 3, 'Brasília is the federal capital of Brazil and seat of government of the Federal District. The city is located atop the Brazilian highlands in the country\'s center-western region. It was founded on April 21, 1960, to serve as the new national capital. Brasília is estimated to be Brazil\'s 3rd most populous city. Among major Latin American cities, Brasília has the highest GDP per capita at R$61,915 (US$36,175)');

var q8 = new Question('What is the capital city of Indonesia?', ['Surubaya', 'Bandung', 'Jakarta' , 'Medan'], 2, 'Jakarta, officially the Special Capital Region of Jakarta (Indonesian: Daerah Khusus Ibu Kota Jakarta), is the capital and largest city of Indonesia. Located on the northwest coast of the world\'s most populous island Java, it is the centre of economics, culture and politics of Indonesia, with a population of 10,075,310 as of 2014');

var q9 = new Question('What is the capital city of Colombia?', ['Medellin', 'Bogota', 'Cartagena', 'Cali'], 1, 'Bogotá, officially Bogotá, Distrito Capital, abbreviated Bogotá, D.C., and formerly known as Santafé/Santa Fé de Bogotá between 1991 and 2000, is the capital and largest city of Colombia, administered as the Capital District, although often thought of as part of Cundinamarca.');

var q10 = new Question('What is the capital city of Jamaica?', ['Havana', 'Kingston', 'Santo Domingo', 'San Juan'], 1, 'Kingston is the capital and largest city of Jamaica, located on the southeastern coast of the island. It faces a natural harbour protected by the Palisadoes, a long sand spit which connects the town of Port Royal and the Norman Manley International Airport to the rest of the island. In the Americas, Kingston is the largest predominantly English-speaking city south of the United States.');

var q11 = new Question('What is the capital city of Cambodia?', ['Phnom Penh', 'Ta Khmau', 'Ho Chi Minh City', 'Hanoi'], 0, 'Phnom Penh, formerly known as Krong Chaktomuk or Krong Chaktomuk Serimongkul, is the capital and most populous city in Cambodia. Phnom Penh has been the national capital since French colonization of Cambodia, and has grown to become the nation\'s economic, industrial, and cultural center.');

var q12 = new Question('What is the capital city of Nigeria?', ['Lagos', 'Ibadan', 'Kano', 'Abuja'], 3, 'Abuja is the capital city of Nigeria located in the centre of the country within the Federal Capital Territory (FCT). It is a planned city and was built mainly in the 1980s, replacing the country\'s most populous city of Lagos as the capital on 12 December 1991. Abuja\'s geography is defined by Aso Rock, a 400-metre (1,300 ft) monolith left by water erosion.');

var q13 = new Question('What is the capital city of Greece?', ['Athens', 'Thesaloniki', 'Istanbul', 'Skopje'], 0, 'Athens is the capital and largest city of Greece. Athens dominates the Attica region and is one of the world\'s oldest cities, with its recorded history spanning over 3,400 years and its earliest human presence starting somewhere between the 11th and 7th millennium BC');

var q14 = new Question('What is the capital city of Mexico?', ['Tijuana', 'Guadalajara', 'Mexico City', 'Puebla'], 2, 'Mexico City is the capital of Mexico and the most populous city in North America. Mexico City is one of the most important cultural and financial centres in the Americas. It is located in the Valley of Mexico (Valle de México), a large valley in the high plateaus in the center of Mexico, at an altitude of 2,240 meters (7,350 ft)');

var q15 = new Question('What is the capital city of Etiophia?', ['Dakar', 'Nairobi', 'Addis Ababa', 'Cairo'], 2, 'Addis Ababa or Addis Abeba, is the capital and largest city of Ethiopia. It is the seat of the Ethiopian federal government. According to the 2007 population census, the city has a total population of 2,739,551 inhabitants.');

var q16 = new Question('What is the capital city of Pakistan?', ['New Delhi', 'Islamabad', 'Teheran', 'Dubai'], 1, 'Islamabad is the capital city of Pakistan located within the federal Islamabad Capital Territory. With a population of 1,014,825 at the 2017 Census, it is the 9th largest city of Pakistan, while the larger Islamabad-Rawalpindi metropolitan area is the third largest in Pakistan with a population exceeding four million.');

var q17 = new Question('What is the capital city of Republic of South Africa?', ['Johannesburg', 'Cape Town', 'Kinshasa-Brazza', 'Luanda'], 1, 'Cape Town is a coastal city in South Africa. It is the capital and primate city of the Western Cape province. It forms part of the City of Cape Town metropolitan municipality.');

var q18 = new Question('What is the capital city of Serbia?', ['Zagreb', 'Novi Sad', 'Podgorica', 'Belgrade'], 3, 'Belgrade is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits.');

var q19 = new Question('What is the capital city of Switzerland?', ['Vienna', 'Zurich', 'Basel', 'Bern'], 3, 'Bern or Berne is the de facto capital of Switzerland, referred to by the Swiss as their (e.g. in German) Bundesstadt, or "federal city". With a population of 142,656 (March 2018), Bern is the fifth-most populous city in Switzerland');

var q20 = new Question('What is the capital city of Argentina?', ['Cordoba', 'Buenos Aires', 'La Plata', 'Rosario'], 1, 'Buenos Aires is the capital and most populous city of Argentina. The city is located on the western shore of the estuary of the Río de la Plata, on the South American continent\'s southeastern coast. "Buenos Aires" can be translated as "fair winds" or "good airs", but the former was the meaning intended by the founders in the 16th century, by the use of the original name "Real de Nuestra Señora Santa María del Buen Ayre".');

var allQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
    

    


function init() {
    
    document.querySelector('.quiz-content').style.display = 'none';
    
}


function startApp() {
    
    document.querySelector('.quiz-content').style.display = 'block';
    document.querySelector('.btn-start').style.display = 'none';
    document.querySelector('.question-name').textContent = q1.q;
    
    for(var i = 0; i < q1.answers.length; i++) {
        
        document.querySelector('#label'+i).textContent = q1.answers[i];
        
    }
    
    document.querySelector('.checking-correct-a').textContent = '';
    document.querySelector('.answer-description').textContent = '';
    
    
    
}
    
function nextQuestion() {
    
    
    document.querySelector('.check').style.display = 'block';
    
    var currQ = document.querySelector('.question-name').textContent;
    
    function displayQuestion() {
        
        document.querySelector('.question-name').textContent = allQ[i+1].q;

        document.querySelector('#label0').textContent = allQ[i+1].answers[0];
        document.querySelector('#label1').textContent = allQ[i+1].answers[1];
        document.querySelector('#label2').textContent = allQ[i+1].answers[2];
        document.querySelector('#label3').textContent = allQ[i+1].answers[3];

        document.querySelector('#input0').checked = false;
        document.querySelector('#input1').checked = false;
        document.querySelector('#input2').checked = false;
        document.querySelector('#input3').checked = false;

        document.querySelector('.checking-correct-a').textContent = '';
        document.querySelector('.answer-description').textContent = '';
        
    }
    
    for(var i = 0; i < allQ.length; i++) {
        
        if (currQ === allQ[allQ.length -2].q) {
                
                displayQuestion();  
            
                document.querySelector('.next').classList.add('result');           
                document.querySelector('.next').textContent = 'See results';
            
                document.querySelector('.result').addEventListener('click', function(){
                    
                    document.querySelector('.quiz-content').innerHTML = '<h1 class="quiz-result-h">Your results are: </h1><br><br><br><p class="quiz-result-p-1">Correct Answers: '+corrArr.length+'</p><br><br><p class="quiz-result-p-2">Wrong Answers: '+wrongArr.length+'</p>';
                    
                });
                
            
                
            
            } else if (currQ === allQ[i].q) {
            
            
            
                displayQuestion(); 


        } 
        
        
        
    }
    
}
    




    
var numOfCorrA = 0;
var numOfWrongA = 0;
var corrArr = [];
var wrongArr = [];
    
function checkCorrectAnswer() {
    
    document.querySelector('.check').style.display = 'none';
    
    var a1 = document.querySelector('#input0').checked;
    var a2 = document.querySelector('#input1').checked;
    var a3 = document.querySelector('#input2').checked;
    var a4 = document.querySelector('#input3').checked;
    
    var allA = [a1, a2, a3, a4];
    
    var checkedA = allA.indexOf(true);
    
    var currQ = document.querySelector('.question-name').textContent;
    
    for(var i = 0; i < allQ.length; i++) {
        
        if(currQ === allQ[i].q && checkedA === allQ[i].corrA) {
            
            document.querySelector('.checking-correct-a').textContent = 'Correct Answer!';
            document.querySelector('.answer-description').textContent = allQ[i].desc;
            
            numOfCorrA ++;
            corrArr.push(numOfCorrA);
            
            
            
            console.log(corrArr);
            
            break;
            
        } 
        
        if(currQ === allQ[i].q && checkedA !== allQ[i].corrA) {
            
            document.querySelector('.checking-correct-a').textContent = 'Wrong Answer!';
            document.querySelector('.answer-description').innerHTML = 'Answer number '+((allQ[i].corrA) + 1) +' is the correct answer.<br><br>'+allQ[i].desc;
            
            numOfWrongA ++;
            wrongArr.push(numOfWrongA);
            
            console.log(wrongArr);

            
            break;
            
        }
        
        

        
    }
}
    

    
    
    




init();
    
document.querySelector('.start').addEventListener('click', startApp);
document.querySelector('.check').addEventListener('click', checkCorrectAnswer);
document.querySelector('.next').addEventListener('click', nextQuestion);


})();






























