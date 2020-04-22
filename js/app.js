var app = new Vue({
  el: "#app",
  data: {
    tarefas: [],

    novaTarefa: {
      title: "",
      estado: false
    },
  },
  methods: {
    addTarefa: function () {
      if (this.novaTarefa.title.length > 0) {
        this.tarefas.push({
          ...this.novaTarefa
        });
        this.novaTarefa.title = ""
      }
    },
    alterarStatus(tarefa) {
      tarefa.estado = !tarefa.estado
    },
    removerTarefa(tarefa) {
      this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
    },
  },
});