/** @format */

import './App.css';

function App() {
	let generateMatrix = function (h, w) {
		let arr = [];
		for (let i = 0; i < h; i++) {
			let items = [];
			for (let j = 0; j < w; j++) {
				items.push(<th>0</th>);
			}
			arr.push(items);
		}

		let count = 1;
		let k = 0;
		let m = arr.length;
		let l = 0;
		let n = arr[0].length;

		while (k < m && l < n) {
			// top
			for (let i = l; i < n; i++) {
				arr[k][i] = count;
				count++;
			}
			k++;

			for (let i = k; i < m; i++) {
				arr[i][n - 1] = count;
				count++;
			}
			n--;

			if (k < m) {
				for (let i = n - 1; i >= l; i--) {
					arr[m - 1][i] = count;
					count++;
				}
				m--;
			}

			if (l < n) {
				for (let i = m - 1; i >= k; i--) {
					arr[i][l] = count;
					count++;
				}
				l++;
			}
		}

		const generateUi = (arr) => {
			return (
				<table>
					<thead>
						{arr.map((val, outIndex) => {
							return (
								<tr>
									{arr[outIndex].map((val, index, x) => {
										return (
											<th
												style={{
													width: '100px',
													height: '50px',
													backgroundColor:
														arr[0].includes(val) ||
														val === arr[outIndex][x.length - 1]
															? `rgb(${40 * val},0,0)`
															: arr[x.length - 1].includes(val) ||
															  val === arr[outIndex][0]
															? `rgb(0,${40 * val},0)`
															: `rgb(0,0,${40 * val})`,
													color: '#fff',
												}}>
												{val}
											</th>
										);

										//Unfortunately, colors does not work properly.. There are the same colors when val is from 8 to 12 and from 13 to 16...
									})}
								</tr>
							);
						})}
					</thead>
				</table>
			);
		};

		return generateUi(arr);
	};

	return <div>{generateMatrix(4, 4)}</div>;
}

export default App;
