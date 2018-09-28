import * as React from "react";
import { IPayment, PaymentType, PurchaseType } from "./VaskekortContainer";

interface IProps {
  index: number;
  payment: IPayment;
  onChange: (index: number, payment: IPayment) => void;
}

class VaskekortEditor extends React.Component<IProps> {

  public render() {
    const payment = this.props.payment;
    return (
      <form>
        <table className="editor">
          <tbody>
            <tr>
              <td>
                <input 
                  type="number" min="0" step="100" 
                  name="amount"
                  value={payment.amount} 
                  onChange={this.handleChange} /> 
              </td>
              <td className={"payment " + payment.payment}>
                <label>
                  <input
                    type="checkbox"
                    name="cash"
                    checked={PaymentType.Cash === payment.payment}
                    onChange={this.handlePaymentChange}
                  />
                  Kontant
                </label>
              </td>
              {/* <td>
                <label>
                  <input 
                    type="radio" 
                    name="payment" 
                    value={PaymentType.MobileyPay} 
                    checked={PaymentType.MobileyPay === payment.payment} 
                    onChange={this.handleChange}  />
                  {PaymentType.MobileyPay}
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="payment" 
                    value={PaymentType.Cash} 
                    checked={PaymentType.Cash === payment.payment}
                    onChange={this.handleChange} />
                  {PaymentType.Cash}
                </label>
              </td> */}
              <td className={"payment " + payment.purchase}>
                <label>
                  <input 
                    type="radio" 
                    name="purchase" 
                    value={PurchaseType.Wash} 
                    checked={PurchaseType.Wash === payment.purchase}
                    onChange={this.handleChange} />            
                  {PurchaseType.Wash}
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="purchase" 
                    value={PurchaseType.Key} 
                    checked={PurchaseType.Key === payment.purchase}
                    onChange={this.handleChange} />            
                  {PurchaseType.Key}
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="purchase" 
                    value={PurchaseType.WaitingList} 
                    checked={PurchaseType.WaitingList === payment.purchase}
                    onChange={this.handleChange} />            
                  {PurchaseType.WaitingList}
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="purchase" 
                    value={PurchaseType.Other} 
                    checked={PurchaseType.Other === payment.purchase}
                    onChange={this.handleChange} />            
                  {PurchaseType.Other}
                </label>          
              </td>
              {PurchaseType.Other === payment.purchase && 
                <td>
                  <input 
                    type="text" 
                    name="note"
                    value={payment.note}
                    onChange={this.handleChange}
                  />
                </td>
                }
            </tr>
          </tbody>
        </table>
      </form>
    )
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const payment = {...this.props.payment};
    payment[target.name] = target.value;
    this.props.onChange(this.props.index, payment);
  }

  private handlePaymentChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const payment = {...this.props.payment};
    payment.payment = target.checked ? PaymentType.Cash : PaymentType.MobileyPay;
    this.props.onChange(this.props.index, payment);
  }

}

export default VaskekortEditor;
