import donorData from "@/data/donors.json";
import type { Donor } from "@/types/models";

const donors: Donor[] = donorData.sort();

const DonorTable = () => {
	return (
		<article className="prose max-w-none text-center text-pretty justify-center  mt-8 px-8">
			<h1>Donation</h1>
			<table className="table md:table-lg max-w-prose text-center text-pretty justify-center ">
				<thead className="text-lg">
					<tr>
						<th>Name</th>
						<th>Data</th>
						<th>Project</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{donors.map((donor) => (
						<tr key={donor.id}>
							<td>{donor.name}</td>
							<td>{donor.data}</td>
							<td>{donor.project}</td>
							<td className="text-right">{donor.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</article>
	);
};

export default async function donationPage() {
	return (
		<main className=" mx-auto min-h-screen flex flex-col space-y-8 ">
			<section className="container mx-auto flex flex-col  bg-base-100">
				<article className="prose max-w-none text-center text-pretty mt-8">
					<h1>捐款渠道</h1>
					<p className="text-left">
						港币壹佰或以上的捐款凭本会发出之收条可申请豁免香港所得税或个人入息税
						<br />
						捐款人士可以划线支票捐赠。为安全起见，我们不会接受网上捐款，亦不鼓励以现金捐赠。
						<br />
						捐款收妥后，我们会发出正式收据。收据必载有本会司库确认捐款收妥之专章。
						<br />
						如收据抬头人于收据签发日起计二个月后仍未见其捐款载列于本网站之捐款名录内，请以电邮直接联系我们的投诉热线。
						<br />
						我们将设立捐款芳名录，并公布于本会网页，以昭公允。捐款人士可选择以真实姓名、无名氏或自选代号载入捐款名录。
						<br />
						捐款人士必须明确显示捐款目的，以便我们专款专用。
						<br />
						请捐款人提供电话号码及电邮地址，方便设立帐户和联系。
						<br />
						请下载捐款表格，填妥后连同以”明德基金有限公司”为抬头人之划线支票寄：
						<br />
						香港中环德辅道中 54-58 号 软库中心 16 楼 1603 室 明德基金有限公司
					</p>
				</article>
			</section>

			<section className="container items-center justify-center bg-base-100">
				<DonorTable />
			</section>
		</main>
	);
}
