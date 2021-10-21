



const button = document.querySelector('.input-button')
button.addEventListener('click', async () => {

   let topicInput = document.getElementById('topic');
   let countInput = document.getElementById('count');
   const GENERATE_TEST = `https://evaluation-system-api.herokuapp.com/api/test/${topicInput.value}/${countInput.value}`
   console.log(GENERATE_TEST)
   if (topicInput.value == '' || countInput.value == '' || topicInput.value != 'matematica') {
      alert('Please especify topic and count and topic: only matematica')
   }

   try {
      const getData = await fetch(GENERATE_TEST);
      const data = await getData.json();
      console.log(data);

      const removeForm = document.getElementById('formEvaluation').remove();

      const container = document.querySelector('.main');
      const sectionContainer = document.createElement('section');
      sectionContainer.className = 'test-section';
      sectionContainer.setAttribute('id', `${data.id}`);
      container.appendChild(sectionContainer);
      
      data.questions.forEach(element => {
         const div = document.createElement('div');
         div.setAttribute('class', 'question');
         div.setAttribute('id', `${element.id}`)

         let templateHTML = `
            <span>${element.questions}</span>
            <span>
               <input type="checkbox" id="${element.answer[0]}">
               <label for="">${element.answer[0]}</label>
            </span>
            <span>
               <input type="checkbox" id="${element.answer[1]}">
               <label for="">${element.answer[1]}</label>
            </span>
            <span>
               <input type="checkbox" id="${element.answer[2]}">
               <label for="">${element.answer[2]}</label>
            </span>
            <span>
               <input type="checkbox" id="${element.answer[3]}">
               <label for="">${element.answer[3]}</label>
            </span>
         `
         
         sectionContainer.appendChild(div).innerHTML = templateHTML;
      })

      const buttonCheckTest = document.createElement('button');
      buttonCheckTest.setAttribute('class', 'input-button');
      sectionContainer.appendChild(buttonCheckTest).innerHTML = 'Check Test';


   } catch (error) {
      console.log(error)
   }
})