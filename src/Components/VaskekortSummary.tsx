import * as React from "react";
import { IPayment, PaymentType, PurchaseType } from "./VaskekortContainer";

interface IProps {
  payments: IPayment[];
}

class VaskekortSummary extends React.Component<IProps> {
  public render() {
    return (
      <table className="editor">
        <thead>
          <tr>
            <th />
            <th>{PaymentType.MobileyPay}</th>
            <th>{PaymentType.Cash}</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow(PurchaseType.Wash)}
          {this.renderRow(PurchaseType.Key)}
          {this.renderRow(PurchaseType.WaitingList)}
          {this.renderRow(PurchaseType.Other)}
          {this.renderRow()}
        </tbody>
      </table>
    )
  }

  public renderRow(type?: PurchaseType) {
    return (
      <tr>
        <td>{type || "I alt"}</td>
        <td>
          {this.calcSummary(type, PaymentType.MobileyPay)}
        </td>
        <td>
          {this.calcSummary(type, PaymentType.Cash)}
        </td>
        <td>
          {this.calcSummary(type)}
        </td>
      </tr>
    )
  }

  private calcSummary(purchase?: PurchaseType, payment?: PaymentType): number {
    let payments = this.props.payments;
    if (payment) {
      payments = payments.filter(x => x.payment === payment);
    }
    if (purchase) {
      payments = payments.filter(x => x.purchase === purchase);
    }

    return payments.reduce((acc, x) => acc + Number(x.amount || 0), 0);
  }
}

export default VaskekortSummary;
