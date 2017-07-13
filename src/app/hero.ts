export class Hero {
  id:number;//英雄id
  name:string;//英雄名
  useCount:number;//使用人数

  constructor(id?: number, name?: string, useCount?:number) {
    this.id = id;
    this.name = name;
    this.useCount = useCount;
  }
}
