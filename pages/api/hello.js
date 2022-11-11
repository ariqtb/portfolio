// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    datas: [
      {
        name: 'John Doe',
        description: 'New Account Added',
      },
      {
        name: 'John Cena',
        description: 'New Account Added',
      },
      {
        name: 'John Kocak',
        description: 'New Account Added',
      },
    ]
   })
}
