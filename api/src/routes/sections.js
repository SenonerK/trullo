import {Router} from 'express';

const ro = Router();

ro.get('/all', (req, res) => {
  res.send({
    sections: [
      {
        id: '126712887',
        title: 'Natalie',
        children: [
          {
            id: '329h2uduh',
            title: 'Test',
            description: 'test123',
            done: false,
          },
          {
            id: '732n293',
            title: 'This',
            description: 'Do that',
            done: true,
          },
        ],
      },
      {
        id: '327971978',
        title: 'Kevin',
        children: [
          {
            id: '8723b2o2y',
            title: 'Test',
            description: 'test123',
            done: false,
          },
          {
            id: 'nn9e2y98',
            title: 'This',
            description: 'Do that',
            done: true,
          },
        ],
      },
    ],
  });
});

export default ro;
