// Требования
// В качестве параметров функция должна принимать на вход:
// Начальную сумму вклада (в валюте)
// Сумму ежемесячного пополнения (в валюте)
// Величину доходности по вкладу (в процентах годовых)
// Срок вклада (дней)

// При расчетах считать, что проценты начисляются ежемесячно и капитализируются (ежемесячный доход попадает на баланс и учитывается при расчете дохода в следующем месяце).

// Функция должна возвращать сумму вклада на момент окончания его срока действия.

// Предусмотреть проверку корректности входных данных. Корректными входными данными для функции следует считать:
// Начальная сумма - положительно число
// Сумма пополнения - неотрицательное число
// Процент - положительное число (до 100)
// Срок - положительное целое число.

// В случае некорректных значений, функция выводит в консоль сообщение об ошибке и возвращать NaN.

let button = document.getElementById("submit");
button.addEventListener("click", calculate);


function alertsum (
  initialAmount,
  MonthlyReplenishment,
  interestRate,
  period){

  let mothlySum = (((initialAmount + MonthlyReplenishment)/100)*interestRate)/12 + initialAmount;
  let periodSum = 

  for (let i = 0; i < month; i++) {
    rezult += (rezult * interestRate) / 100;
  }
  return rezult;
}
console.log(fullDeposit(1000, 5, 15));
