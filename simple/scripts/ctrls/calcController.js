define(['lodash'], function (_) {
    var CalcController = function () {
        var myMath = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '*': function (x, y) { return x * y },
            '/': function (x, y) { return x / y }
        };

        this.ctx = this.ctx || {};

        this.exec = function () {
            var result = isValid(this.ctx.operator) ?
                this.ctx.firstOperand + ' '
              + this.ctx.operator + ' '
              + this.ctx.secondOperand + ' = '
              + myMath[this.ctx.operator](this.ctx.firstOperand, this.ctx.secondOperand)
              : 'Only [ + | - | * | / ] oparations are allowed!';
            alert(result)
        }

        function isValid(operator) {
            return _.includes(['+', '-', '/', '*'], operator);
        }
    };
    return CalcController;
})
