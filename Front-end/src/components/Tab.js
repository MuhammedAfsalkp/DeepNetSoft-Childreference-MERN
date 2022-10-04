import './Tab.css';


const Tab = (props) => {
    return(
        <div className="tab">
            <table>
                <thead>
                <tr>
                    <td className="frst"><input type="checkbox" name="products"></input></td>
                    <th className="second">Product name</th>
                    <th className="third">price</th>

                </tr>
                </thead>
                 <tbody>
                <tr>
                <td><input type="checkbox" name="products"></input></td>
                <td>Product1</td>
                <td>$10</td>
                </tr>

                <tr>
                <td><input type="checkbox" name="products"></input></td>
                <td>Product2</td>
                <td>$10</td>

                </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Tab;
