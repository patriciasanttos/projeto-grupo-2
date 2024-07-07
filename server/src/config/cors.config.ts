import cors from 'cors';

cors({
    origin: 'https://localhost:4444',
    methods: ['GET', 'POST']
})

export default cors;