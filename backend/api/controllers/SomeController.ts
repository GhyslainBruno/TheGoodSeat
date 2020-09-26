declare var sails: any;

export function hello(req:any, res:any, next: Function):any {
  res.status(200).send('Hello from Typescript!');
}
