const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6InRlc3QiLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicGhvdG8iOiJodHRwOi8vcGxhY2VpbWcuY29tLzY0MC80ODAvbmlnaHRsaWZlIiwicm9sZUlkIjoxLCJpYXQiOjE2MzU2MDY4MDEsImV4cCI6MTYzNTY1MDAwMX0.Rk6WHjqVNpyzD8NeW39Yv7xV09zNNC-gY9A96hP3X_s';

describe('Testing Members Routes', () => {
	it('It should get a list of all members. GET /members', (done) => {
		chai
			.request(url)
			.get('/members')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).be.a('object');
				expect(res.body).to.have.property('members');
				done();
			});
	});

	it('It should create a new Member', (done) => {
		chai
			.request(url)
			.post('/members')
			.set({ Authorization: token })
			.send({ name: 'Test Name' })
			.end((err, res) => {
				expect(res).to.have.status(201);
				done();
			});
	});

	it('It should edit a member by ID', (done) => {
		const id = 2;
		const body = {
			name: 'Name Modified',
			description: 'Just a description',
		};
		chai
			.request(url)
			.put(`/members/${id}`)
			.set({ Authorization: token })
			.send(body)
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).be.a('object');
				expect(res.body.ok).be.eq(true);
				done();
			});
	});

	it('It should soft delete a member', (done) => {
		const id = 2;

		chai
			.request(url)
			.delete(`/members/${id}`)
			.set({ Authorization: token })
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
});
