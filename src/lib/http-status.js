export const DEFAULT_HTTP_CODE = '502';

/**
 * @typedef {object} StatusPresentation
 * @property {string} category
 * @property {string} title
 * @property {string} description
 * @property {string} action
 * @property {string} tone
 * @property {string} glyph
 */

/** @type {Record<number, StatusPresentation>} */
const FAMILY_CONTENT = {
	1: {
		category: 'Informational response',
		title: 'Request in progress',
		description: 'The server has received the request and is continuing to process it.',
		action: 'Wait for the final response before sending the request again.',
		tone: 'blue',
		glyph: '···'
	},
	2: {
		category: 'Successful response',
		title: 'Request completed',
		description: 'The server accepted and completed the request.',
		action: 'No further action is needed.',
		tone: 'green',
		glyph: '✓'
	},
	3: {
		category: 'Redirection response',
		title: 'Resource moved',
		description: 'The requested resource is available at a different location.',
		action: 'Follow the redirect or check the destination address.',
		tone: 'blue',
		glyph: '→'
	},
	4: {
		category: 'Request error',
		title: 'Request could not be completed',
		description: 'The server could not accept this request in its current form.',
		action: 'Check the request and try again.',
		tone: 'amber',
		glyph: '!'
	},
	5: {
		category: 'Service error',
		title: 'Service could not respond',
		description: 'The server encountered a problem while handling the request.',
		action: 'Wait a moment, then try again.',
		tone: 'red',
		glyph: '×'
	}
};

/** @type {Record<string, Partial<StatusPresentation>>} */
const STATUS_CONTENT = {
	400: {
		title: 'Bad Request',
		description: 'The server could not understand the request that was sent.',
		action: 'Check the address or submitted data, then try again.',
		glyph: '?!'
	},
	401: {
		title: 'Unauthorized',
		description: 'This resource needs valid authentication before it can be opened.',
		action: 'Sign in with the right account and retry the request.',
		glyph: '⌁'
	},
	402: {
		title: 'Payment Required',
		description: 'Access is unavailable until the required payment condition is met.',
		action: 'Review the account or billing status before trying again.',
		glyph: '$'
	},
	403: {
		category: 'Access blocked',
		title: 'Forbidden',
		description: 'This resource exists, but this request does not have permission to access it.',
		action: 'Check your access rights or contact the service owner.',
		tone: 'orange',
		glyph: '⊘'
	},
	404: {
		category: 'Resource missing',
		title: 'Not Found',
		description: 'The address does not point to an available page or resource.',
		action: 'Check the URL or return to the previous page.',
		tone: 'violet',
		glyph: '⌁'
	},
	405: {
		title: 'Method Not Allowed',
		description: 'This resource does not support the request method that was used.',
		action: 'Use one of the methods allowed by the endpoint.',
		glyph: '↛'
	},
	406: {
		title: 'Not Acceptable',
		description: 'The server cannot return a response in any requested format.',
		action: 'Adjust the accepted response formats and try again.',
		glyph: '≠'
	},
	407: {
		title: 'Proxy Authentication Required',
		description: 'The proxy needs valid authentication before forwarding this request.',
		action: 'Authenticate with the proxy, then retry.',
		glyph: '⌁'
	},
	408: {
		category: 'Request timed out',
		title: 'Request Timeout',
		description: 'The server stopped waiting before the request was fully received.',
		action: 'Check the connection and send the request again.',
		tone: 'blue',
		glyph: '◷'
	},
	409: {
		title: 'Conflict',
		description: 'The request conflicts with the resource’s current state.',
		action: 'Refresh the latest data, resolve the conflict, and retry.',
		glyph: '⇄'
	},
	410: {
		title: 'Gone',
		description: 'This resource was removed and is no longer available.',
		action: 'Remove old links or look for a replacement resource.',
		glyph: '—'
	},
	411: {
		title: 'Length Required',
		description: 'The server requires the request body length to be declared.',
		action: 'Add a valid Content-Length header and resend the request.',
		glyph: '↔'
	},
	412: {
		title: 'Precondition Failed',
		description: 'A condition attached to the request was not satisfied.',
		action: 'Refresh the resource state and update the request conditions.',
		glyph: '≠'
	},
	413: {
		title: 'Content Too Large',
		description: 'The request body is larger than this server accepts.',
		action: 'Reduce the payload size, then upload it again.',
		glyph: '↥'
	},
	414: {
		title: 'URI Too Long',
		description: 'The requested address is longer than the server can process.',
		action: 'Shorten the URL or move request data into the body.',
		glyph: '…'
	},
	415: {
		title: 'Unsupported Media Type',
		description: 'The submitted content format is not supported by this endpoint.',
		action: 'Use a supported Content-Type and try again.',
		glyph: '◇'
	},
	416: {
		title: 'Range Not Satisfiable',
		description: 'The requested portion falls outside the available resource.',
		action: 'Request a valid range or download the full resource.',
		glyph: '↔'
	},
	417: {
		title: 'Expectation Failed',
		description: 'The server cannot meet an expectation declared by the request.',
		action: 'Remove or revise the Expect header before retrying.',
		glyph: '!'
	},
	418: {
		category: 'Protocol easter egg',
		title: 'I’m a Teapot',
		description: 'This endpoint is a teapot and will not brew coffee.',
		action: 'Choose the right appliance, or enjoy the joke.',
		tone: 'violet',
		glyph: '♨'
	},
	421: {
		title: 'Misdirected Request',
		description: 'The request reached a server that cannot answer for this destination.',
		action: 'Check the target host and connection routing.',
		glyph: '↗'
	},
	422: {
		title: 'Unprocessable Content',
		description: 'The request format is valid, but its content cannot be processed.',
		action: 'Correct the submitted values and try again.',
		glyph: '◇'
	},
	423: {
		title: 'Locked',
		description: 'The resource is locked and cannot be changed right now.',
		action: 'Wait for the lock to clear or contact the lock owner.',
		glyph: '⌁'
	},
	424: {
		title: 'Failed Dependency',
		description: 'This request failed because an operation it depends on did not complete.',
		action: 'Resolve the earlier failure, then retry this operation.',
		glyph: '⌇'
	},
	425: {
		title: 'Too Early',
		description: 'The server will not process this request while replay is still possible.',
		action: 'Wait for a safe connection state, then retry.',
		glyph: '◷'
	},
	426: {
		title: 'Upgrade Required',
		description: 'The request must use a newer or different protocol.',
		action: 'Upgrade the connection as indicated by the server.',
		glyph: '↥'
	},
	428: {
		title: 'Precondition Required',
		description: 'The server requires this request to include a condition.',
		action: 'Add the required conditional header and resend the request.',
		glyph: '◇'
	},
	429: {
		category: 'Rate limit reached',
		title: 'Too Many Requests',
		description: 'This client has sent more requests than the service allows right now.',
		action: 'Pause, then retry after the rate-limit window resets.',
		tone: 'pink',
		glyph: '≋'
	},
	431: {
		title: 'Request Headers Too Large',
		description: 'The request headers exceed the size this server accepts.',
		action: 'Reduce cookies or other header data, then try again.',
		glyph: '↥'
	},
	451: {
		category: 'Legally unavailable',
		title: 'Unavailable for Legal Reasons',
		description: 'Access to this resource is restricted by a legal demand.',
		action: 'Review the notice from the service provider for details.',
		tone: 'orange',
		glyph: '§'
	},
	500: {
		category: 'Unexpected failure',
		title: 'Internal Server Error',
		description: 'The service hit an unexpected condition while processing the request.',
		action: 'Try again later; the service team may need to investigate.',
		glyph: '×'
	},
	501: {
		title: 'Not Implemented',
		description: 'The server does not support the capability needed for this request.',
		action: 'Use a supported operation or contact the service owner.',
		glyph: '∅'
	},
	502: {
		category: 'Upstream connection failed',
		title: 'Bad Gateway',
		description: 'The gateway received an invalid response from the service behind it.',
		action: 'Retry in a moment while the upstream connection recovers.',
		tone: 'pink',
		glyph: '⇄'
	},
	503: {
		category: 'Service temporarily offline',
		title: 'Service Unavailable',
		description:
			'The service cannot handle this request right now, often because it is restarting or busy.',
		action: 'Wait a moment, then try again.',
		tone: 'red',
		glyph: '···'
	},
	504: {
		category: 'Upstream response timed out',
		title: 'Gateway Timeout',
		description: 'The gateway waited for another service, but no response arrived in time.',
		action: 'Retry shortly; a dependent service may still be recovering.',
		tone: 'amber',
		glyph: '◷'
	},
	505: {
		title: 'HTTP Version Not Supported',
		description: 'The server does not support the HTTP version used by this request.',
		action: 'Send the request with a supported HTTP version.',
		glyph: '≠'
	},
	506: {
		title: 'Variant Also Negotiates',
		description: 'The server found a circular configuration while choosing a response variant.',
		action: 'The service configuration needs to be corrected.',
		glyph: '↻'
	},
	507: {
		title: 'Insufficient Storage',
		description: 'The server does not have enough storage to complete this operation.',
		action: 'Free server storage or retry after capacity is restored.',
		glyph: '▰'
	},
	508: {
		title: 'Loop Detected',
		description: 'The server found an infinite loop while processing this request.',
		action: 'Review the resource or server configuration for cycles.',
		glyph: '↻'
	},
	510: {
		title: 'Not Extended',
		description: 'The request needs additional extensions before it can be fulfilled.',
		action: 'Add the extensions required by the server.',
		glyph: '+'
	},
	511: {
		title: 'Network Authentication Required',
		description: 'The network requires authentication before this request can continue.',
		action: 'Sign in to the network, then reload this page.',
		glyph: '⌁'
	}
};

export const HTTP_STATUS_PAGES = Object.entries(STATUS_CONTENT).map(([code, statusContent]) => ({
	code,
	...FAMILY_CONTENT[Number(code[0])],
	...statusContent
}));

export const HTTP_STATUS_FAMILIES = Object.entries(FAMILY_CONTENT).map(([family, content]) => ({
	family,
	...content
}));

/**
 * Accept a single HTTP status code and discard any surrounding configuration noise.
 *
 * @param {unknown} value
 * @param {string} [fallback]
 */
export function normalizeHttpCode(value, fallback = DEFAULT_HTTP_CODE) {
	const candidate = String(value ?? '').trim();
	return /^[1-5]\d{2}$/.test(candidate) ? candidate : fallback;
}

/** @param {unknown} value */
export function getHttpStatus(value) {
	const code = normalizeHttpCode(value);
	const family = Number(code[0]);
	const familyContent = FAMILY_CONTENT[family] ?? FAMILY_CONTENT[5];
	const statusContent = STATUS_CONTENT[code] ?? {};

	return {
		code,
		family,
		...familyContent,
		...statusContent
	};
}
