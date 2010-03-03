function translate_targets(doc) {
	var nodes = doc.evaluate(
		'//*[@target="_blank"]',
		doc, null, 6, null);
	
	if (!nodes) return false;

	for (i = 0; i < nodes.snapshotLength; i++) {
		nodes.snapshotItem(i).setAttribute('target','_top');
	}
}

translate_targets(document);
