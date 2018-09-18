import * as React from "react";

const denominations = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1, .50];

interface IState {
  cash: { [denomination: number]: number};
}

class Kontanter extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    const cash = this.getInitCash();
    this.state = { cash };
  }

  public render() {
    return (
      <>
        <h2>Kontanter</h2>
        <table>
          <thead>
            <tr>
              <th>Enhed</th>
              <th>Antal</th>
              <th>Beløb</th>            
            </tr>
          </thead>
          <tbody>
            {denominations.map((denom) =>
              <tr key={denom}>
                <td>{denom}</td>
                <td>
                  <input
                    type="number" min="0" step="1"
                    value={this.state.cash[denom]}    
                    data-denom={denom}
                    onChange={this.handleChange}                
                  />
                </td>
                <td>
                  {denom * this.state.cash[denom]}
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>I alt</td>
              <td />
              <td>
                {this.calcTotal()}
              </td>
            </tr>
          </tfoot>
        </table>
        <button onClick={this.clear} type="button">Ryd</button>
      </>
    )
  }

  private calcTotal() {
    return denominations.reduce((acc, denom) => denom * this.state.cash[denom] + acc, 0);
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const denom = Number(target.dataset.denom);
    const value = Number(target.value || 0) || 0;
    const cash = {...this.state.cash};
    cash[denom] = value;
    this.setState({ cash });
  }

  private clear = () => {
    const cash = this.getInitCash();
    this.setState({ cash })
  }

  private getInitCash() {
    const cash = {};
    denominations.forEach(x => cash[x] = 0);
    return cash;
  }
}

export default Kontanter;
