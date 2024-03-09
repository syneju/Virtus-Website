const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer footer-center p-4 mt-8 text-base-content bg-base-300 mx-auto ">
			<aside>
				<p>Copyright © {currentYear} - 明德慈善教育基金</p>
			</aside>
		</footer>
	);
};
export default Footer;
