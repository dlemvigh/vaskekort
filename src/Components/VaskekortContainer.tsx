import * as React from "react";
import VaskekortEditor from "./VaskekortEditor";
import VaskekortSummary from "./VaskekortSummary";

export enum PaymentType {
  Cash = "Kontant",
  MobileyPay = "MobilePay",
}

export enum PurchaseType {
  Wash = "Vaskekort",
  Key = "Nøgle",
  WaitingList = "Venteliste",
  Other = "Andet"
}

export interface IPayment {
  amount?: number;
  payment: PaymentType;
  purchase: PurchaseType;
  note?: string;
}

interface IState {
  payments: IPayment[];
}

const defaultPayment: IPayment = {
  payment: PaymentType.MobileyPay,
  purchase: PurchaseType.Wash
}

class VaskekortContainer extends React.Component<{}, IState>  {
  constructor(props: {}) {
    super(props);
    this.state = {
      payments: [defaultPayment]
    }
  }

  public render() {
    return (
      <>
        <h2>Vaskekort</h2>
        { this.state.payments.map((payment, index) => 
          <VaskekortEditor key={index} index={index} payment={payment} onChange={this.handleChange} />)}
        <VaskekortSummary payments={this.state.payments} />
        <button onClick={this.clear} type="button">Ryd</button>
      </>
    );
  }

  private handleChange = (index: number, payment: IPayment) => {
    const payments = [...this.state.payments];
    payments[index] = payment;

    if (index === this.state.payments.length - 1) {
      payments.push(defaultPayment);
    }

    this.setState({ payments });
  }

  private clear = () => {
    this.setState({
      payments: [defaultPayment]
    })
  }

}

export default VaskekortContainer;
