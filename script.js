let adj = document.getElementById('adjective_input'); // idiotic 
let noun = document.getElementById('noun_input'); // boy
let verb = document.getElementById('verb_input'); // jumped

let btn = document.getElementById('submit_btn');

let result = document.getElementById('result');

let endings = [' in the toilet', ' to the dancing goat', ' to the idiotic donkey',
' on the lazy brown dog', ' on the teacher'];

function get_MadLib(){
    if (verb.value && adj.value && noun.value != ''){
        function random(min, max) {
            let num1 = max - min + 1;
            let num2 = Math.random() * num1;
            let ans = Math.floor(num2) + min;
            return ans; 
        };
        let index = random(0, endings.length-1);
        let end_value = endings[index];

        let value =  ' The ' + adj.value + ' ' + noun.value + ' ' + verb.value + end_value;
        adj.value = ''
        noun.value = ''
        verb.value = ''
        result.innerHTML = value;
        responsiveVoice.speak(value);
    }    
    else {
        alert('Enter an ADJECTIVE, a NOUN and a VERB!')
    }
};