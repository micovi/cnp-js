const expect = require('chai').expect;
const { default: CNP } = require('../dist');
const cnp = require('../dist/index').default;

describe('CNP', function () {
    describe('#dateOfBirth', function () {
        it('Month calculation should be accurate', function () {

            let cnp = new CNP(1940715297290);
            expect(cnp.dateOfBirth.getMonth() + 1).to.equal(cnp.monthOfBirth);

            cnp = new CNP(1941215297290);
            expect(cnp.dateOfBirth.getMonth() + 1).to.equal(cnp.monthOfBirth);

            cnp = new CNP(1940115297290);
            expect(cnp.dateOfBirth.getMonth() + 1).to.equal(cnp.monthOfBirth);

            cnp = new CNP(1941231297290);
            expect(cnp.dateOfBirth.getMonth() + 1).to.equal(cnp.monthOfBirth);

            cnp = new CNP(1940101297290);
            expect(cnp.dateOfBirth.getMonth() + 1).to.equal(cnp.monthOfBirth);

            cnp = new CNP(1940701297290);
            expect(cnp.dateOfBirth.getMonth() + 1).to.equal(cnp.monthOfBirth);

            cnp = new CNP(1940731297290);
            expect(cnp.dateOfBirth.getMonth() + 1).to.equal(cnp.monthOfBirth);

        });

        it('Day calculation should be accurate', function () {

            let cnp = new CNP(1940715297290);
            expect(cnp.dateOfBirth.getDate()).to.equal(cnp.dayOfBirth);

            cnp = new CNP(1941215297290);
            expect(cnp.dateOfBirth.getDate()).to.equal(cnp.dayOfBirth);

            cnp = new CNP(1940115297290);
            expect(cnp.dateOfBirth.getDate()).to.equal(cnp.dayOfBirth);

            cnp = new CNP(1941231297290);
            expect(cnp.dateOfBirth.getDate()).to.equal(cnp.dayOfBirth);

            cnp = new CNP(1940101297290);
            expect(cnp.dateOfBirth.getDate()).to.equal(cnp.dayOfBirth);

            cnp = new CNP(1940701297290);
            expect(cnp.dateOfBirth.getDate()).to.equal(cnp.dayOfBirth);

            cnp = new CNP(1940731297290);
            expect(cnp.dateOfBirth.getDate()).to.equal(cnp.dayOfBirth);

        });
    });
});