/*Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
XStampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
XVisualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
XPredisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- Xoltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

const {createApp} = Vue;

createApp({
    data(){
        return{
            newTask:"",
            todoItem:[
                {
                    text:"Fare i compiti",
                    done:false,
                },
                {
                    text:"Passare dal supermercato",
                    done:false,
                },
                {
                    text:"Completare slider di Olga",
                    done:false,
                },
            ]

        }
    },
     methods:{
        deleteTask(indexOfTasks){
            console.log(indexOfTasks);
            this.todoItem.splice(indexOfTasks, 1);
            console.log(this.todoItem);
        },
        addNewTask(){
            console.log(this.todoItem.text, "todo item");
            this.todoItem.push({text:this.newTask, done:false});
            this.newTask = "";
        },
        checkedTask(indexOfTasks){
            console.log(this.todoItem.length);
            this.todoItem[indexOfTasks].done = !this.todoItem[indexOfTasks].done;
        }
    }
}).mount("#app")