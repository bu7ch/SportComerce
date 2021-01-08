import { Injectable } from "@angular/core";

@Injectable()

export class Cart {
  public itemCount: number = 0;
  public cartPrice: number = 0;
}