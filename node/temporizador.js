const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 16 * * 2", function () {
  console.log("executando a tarefa1", new Date().getSeconds());
});

setTimeout(function () {
  tarefa1.cancel();
  console.log("tarefa cancelada");
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("tarefa 2", new Date().getSeconds());
});
