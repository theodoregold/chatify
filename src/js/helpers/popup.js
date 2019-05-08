const open = (url, title, w, h) => {
	const userAgent = navigator.userAgent;

	const mobile = () => {
		return /\b(iPhone|iP[ao]d)/.test(userAgent) ||
			/\b(iP[ao]d)/.test(userAgent) ||
			/Android/i.test(userAgent) ||
			/Mobile/i.test(userAgent);
	};

	const screenX = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft;
	const screenY = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop;
	const outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.documentElement.clientWidth;
	const outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : document.documentElement.clientHeight - 22;
	const targetWidth = mobile() ? null : w;
	const targetHeight = mobile() ? null : h;
	const V = screenX < 0 ? window.screen.width + screenX : screenX;
	const left = parseInt(V + (outerWidth - targetWidth) / 2, 10);
	const right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10);
	const features = [];

	if (targetWidth !== null) {
		features.push('width=' + targetWidth);
	}
	if (targetHeight !== null) {
		features.push('height=' + targetHeight);
	}
	features.push('left=' + left);
	features.push('top=' + right);
	features.push('scrollbars=1');

	const newWindow = window.open(url, title, features.join(','));

	if (window.focus) {
		newWindow.focus();
	}

	return newWindow;
};

export default {
	open,
};
