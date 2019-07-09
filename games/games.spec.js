const request = require('supertest');
const games = require('./games');

describe('games server', () => {
    it('should start the server on port 5050', () => {
        expect(process.env.PORT).toBe('5050')
    })
    describe('POST /games', () => {
        it('should return 200', () => {
            const game = {
                title: "game1",
                genre: "Action",
                releaseYear: 1988
            }
            return request(games)
                .post('/games', game)
                .then(res => {
                expect(res.status).toBe(200);
                });
        });
        it('should return 500', () => {
            const game = {
                title: "game1",
                releaseYear: 1988
            }
            return request(games)
            .post('/games', game)
            .then(res => {
            expect(res.status).toBe(500);
            });
        })
        it('should return 200', () => {
            const game = {
                title: "game1", 
                genre: "Action",
            }
            return request(games)
                .post('/games', game)
                .then(res => {
                expect(res.status).toBe(200);
                });
        });
    })
    describe('GET /', () =>{
        it('should return the list of games and status 200', () => {
            const list = {};
            return request(games)
            .get('/games')
            .then(res => {
                expect(res).toMatchObject(list)
                expect(res.status).toBe(200)
            })
        })
        it('should return as defined', () => {
            return request(games)
            .get('/games')
            .then(res => {
                expect(res).toBeDefined()
                expect(res.status).toBe(200)
            })
        })
        it('should return the list of games and status 200', () => {
            const title = 'title';
            return request(games)
            .get('/games')
            .then(res => {
                expect(res.text).toContain(title)
                expect(res.status).toBe(200)
            })
        })
    })
        
})