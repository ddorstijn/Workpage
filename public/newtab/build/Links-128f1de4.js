
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as createEventDispatcher, e as element, t as text, a as space, b as attr_dev, c as add_location, f as insert_dev, g as append_dev, q as listen_dev, r as is_function, h as set_data_dev, n as noop, j as detach_dev, C as validate_each_argument, k as validate_store, m as component_subscribe, l as activeId, A as currentId, B as globals, J as create_component, K as mount_component, E as transition_in, G as transition_out, L as destroy_component, y as prevent_default, D as action_destroyer, I as destroy_each, u as run_all, M as prop_dev, F as group_outros, H as check_outros, w as set_store_value } from './main-a37b6cb8.js';
import { c as createPopperActions } from './index-0eb2df58.js';
import { S as SortableGroup } from './SortableGroup-b26a325b.js';

/* src/newtab/components/LinkItem.svelte generated by Svelte v3.35.0 */
const file$1 = "src/newtab/components/LinkItem.svelte";

function create_fragment$1(ctx) {
	let div1;
	let a;
	let t0_value = /*item*/ ctx[0].title + "";
	let t0;
	let a_href_value;
	let t1;
	let div0;
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div1 = element("div");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			div0 = element("div");
			button = element("button");
			button.textContent = "close";
			attr_dev(a, "class", "subtitle2 svelte-1mb4apf");
			attr_dev(a, "href", a_href_value = /*item*/ ctx[0].url);
			add_location(a, file$1, 8, 2, 154);
			attr_dev(button, "class", "material-icons [ md-14 no-gutters ] [ alert ]");
			add_location(button, file$1, 10, 4, 241);
			attr_dev(div0, "class", "item-actions svelte-1mb4apf");
			add_location(div0, file$1, 9, 2, 210);
			attr_dev(div1, "class", "item svelte-1mb4apf");
			add_location(div1, file$1, 7, 0, 133);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, a);
			append_dev(a, t0);
			append_dev(div1, t1);
			append_dev(div1, div0);
			append_dev(div0, button);

			if (!mounted) {
				dispose = listen_dev(
					button,
					"click",
					function () {
						if (is_function(/*dispatch*/ ctx[1]("remove", { item: /*item*/ ctx[0] }))) /*dispatch*/ ctx[1]("remove", { item: /*item*/ ctx[0] }).apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			if (dirty & /*item*/ 1 && t0_value !== (t0_value = /*item*/ ctx[0].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*item*/ 1 && a_href_value !== (a_href_value = /*item*/ ctx[0].url)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("LinkItem", slots, []);
	let { item } = $$props;
	const dispatch = createEventDispatcher();
	const writable_props = ["item"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<LinkItem> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
	};

	$$self.$capture_state = () => ({ createEventDispatcher, item, dispatch });

	$$self.$inject_state = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [item, dispatch];
}

class LinkItem extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { item: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LinkItem",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*item*/ ctx[0] === undefined && !("item" in props)) {
			console.warn("<LinkItem> was created without expected prop 'item'");
		}
	}

	get item() {
		throw new Error("<LinkItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<LinkItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/newtab/components/Links.svelte generated by Svelte v3.35.0 */

const { console: console_1 } = globals;
const file = "src/newtab/components/Links.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i];
	return child_ctx;
}

// (78:2) {#each links as group}
function create_each_block_1(ctx) {
	let sortablegroup;
	let current;

	sortablegroup = new SortableGroup({
			props: {
				itemComponent: LinkItem,
				group: /*group*/ ctx[21]
			},
			$$inline: true
		});

	sortablegroup.$on("remove", function () {
		if (is_function(/*removeGroup*/ ctx[10](/*group*/ ctx[21]))) /*removeGroup*/ ctx[10](/*group*/ ctx[21]).apply(this, arguments);
	});

	sortablegroup.$on("sync", /*syncLinks*/ ctx[8]);

	const block = {
		c: function create() {
			create_component(sortablegroup.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(sortablegroup, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const sortablegroup_changes = {};
			if (dirty & /*links*/ 4) sortablegroup_changes.group = /*group*/ ctx[21];
			sortablegroup.$set(sortablegroup_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(sortablegroup.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(sortablegroup.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(sortablegroup, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(78:2) {#each links as group}",
		ctx
	});

	return block;
}

// (99:1) {#if creatingLink}
function create_if_block_1(ctx) {
	let div2;
	let span0;
	let t1;
	let form;
	let fieldset;
	let label0;
	let input0;
	let t2;
	let span1;
	let t4;
	let label1;
	let select;
	let option;
	let t5;
	let span2;
	let t7;
	let label2;
	let input1;
	let t8;
	let span3;
	let t10;
	let div0;
	let button;
	let t12;
	let input2;
	let t13;
	let div1;
	let mounted;
	let dispose;
	let each_value = /*links*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div2 = element("div");
			span0 = element("span");
			span0.textContent = "Create link item";
			t1 = space();
			form = element("form");
			fieldset = element("fieldset");
			label0 = element("label");
			input0 = element("input");
			t2 = space();
			span1 = element("span");
			span1.textContent = "Title";
			t4 = space();
			label1 = element("label");
			select = element("select");
			option = element("option");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			span2 = element("span");
			span2.textContent = "Group";
			t7 = space();
			label2 = element("label");
			input1 = element("input");
			t8 = space();
			span3 = element("span");
			span3.textContent = "Url";
			t10 = space();
			div0 = element("div");
			button = element("button");
			button.textContent = "close";
			t12 = space();
			input2 = element("input");
			t13 = space();
			div1 = element("div");
			attr_dev(span0, "class", "caption hint");
			add_location(span0, file, 103, 3, 2309);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Name");
			input0.required = true;
			add_location(input0, file, 107, 6, 2439);
			add_location(span1, file, 108, 6, 2495);
			add_location(label0, file, 106, 5, 2425);
			option.__value = "";
			option.value = option.__value;
			option.disabled = true;
			option.selected = true;
			add_location(option, file, 113, 7, 2573);
			select.required = true;
			add_location(select, file, 112, 6, 2548);
			add_location(span2, file, 118, 6, 2738);
			add_location(label1, file, 111, 5, 2534);
			add_location(fieldset, file, 105, 4, 2409);
			attr_dev(input1, "type", "url");
			attr_dev(input1, "placeholder", "www.example.com");
			input1.required = true;
			add_location(input1, file, 123, 5, 2805);
			add_location(span3, file, 124, 5, 2870);
			add_location(label2, file, 122, 4, 2792);
			attr_dev(button, "type", "button");
			add_location(button, file, 128, 5, 2937);
			attr_dev(input2, "class", "elevation-2");
			attr_dev(input2, "type", "submit");
			input2.value = "Add link";
			add_location(input2, file, 131, 5, 3032);
			attr_dev(div0, "class", "form-actions");
			add_location(div0, file, 127, 4, 2905);
			add_location(form, file, 104, 3, 2363);
			attr_dev(div1, "class", "arrow");
			attr_dev(div1, "data-popper-arrow", "");
			add_location(div1, file, 134, 3, 3118);
			attr_dev(div2, "class", "tooltip [ surface elevation-24 ]");
			add_location(div2, file, 99, 2, 2212);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, span0);
			append_dev(div2, t1);
			append_dev(div2, form);
			append_dev(form, fieldset);
			append_dev(fieldset, label0);
			append_dev(label0, input0);
			append_dev(label0, t2);
			append_dev(label0, span1);
			append_dev(fieldset, t4);
			append_dev(fieldset, label1);
			append_dev(label1, select);
			append_dev(select, option);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			append_dev(label1, t5);
			append_dev(label1, span2);
			append_dev(form, t7);
			append_dev(form, label2);
			append_dev(label2, input1);
			append_dev(label2, t8);
			append_dev(label2, span3);
			append_dev(form, t10);
			append_dev(form, div0);
			append_dev(div0, button);
			append_dev(div0, t12);
			append_dev(div0, input2);
			append_dev(div2, t13);
			append_dev(div2, div1);

			if (!mounted) {
				dispose = [
					listen_dev(button, "click", /*click_handler_2*/ ctx[14], false, false, false),
					listen_dev(form, "submit", prevent_default(/*addLink*/ ctx[11]), false, true, false),
					action_destroyer(/*linkPopperContent*/ ctx[4].call(null, div2, /*popperOptions*/ ctx[7]))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*links*/ 4) {
				each_value = /*links*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(99:1) {#if creatingLink}",
		ctx
	});

	return block;
}

// (115:7) {#each links as link}
function create_each_block(ctx) {
	let option;
	let t_value = /*link*/ ctx[18].title + "";
	let t;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = /*link*/ ctx[18].id;
			option.value = option.__value;
			add_location(option, file, 115, 8, 2655);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*links*/ 4 && t_value !== (t_value = /*link*/ ctx[18].title + "")) set_data_dev(t, t_value);

			if (dirty & /*links*/ 4 && option_value_value !== (option_value_value = /*link*/ ctx[18].id)) {
				prop_dev(option, "__value", option_value_value);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(115:7) {#each links as link}",
		ctx
	});

	return block;
}

// (138:1) {#if creatingGroup}
function create_if_block(ctx) {
	let div2;
	let span0;
	let t1;
	let form;
	let label;
	let input0;
	let t2;
	let span1;
	let t4;
	let div0;
	let button;
	let t6;
	let input1;
	let t7;
	let div1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div2 = element("div");
			span0 = element("span");
			span0.textContent = "Create link group";
			t1 = space();
			form = element("form");
			label = element("label");
			input0 = element("input");
			t2 = space();
			span1 = element("span");
			span1.textContent = "Title";
			t4 = space();
			div0 = element("div");
			button = element("button");
			button.textContent = "close";
			t6 = space();
			input1 = element("input");
			t7 = space();
			div1 = element("div");
			attr_dev(span0, "class", "caption hint");
			add_location(span0, file, 142, 3, 3295);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Name");
			add_location(input0, file, 145, 5, 3410);
			add_location(span1, file, 146, 5, 3456);
			add_location(label, file, 144, 4, 3397);
			attr_dev(button, "type", "button");
			add_location(button, file, 150, 5, 3525);
			attr_dev(input1, "class", "elevation-2");
			attr_dev(input1, "type", "submit");
			input1.value = "Add group";
			add_location(input1, file, 153, 5, 3621);
			attr_dev(div0, "class", "form-actions");
			add_location(div0, file, 149, 4, 3493);
			add_location(form, file, 143, 3, 3350);
			attr_dev(div1, "class", "arrow");
			attr_dev(div1, "data-popper-arrow", "");
			add_location(div1, file, 156, 3, 3708);
			attr_dev(div2, "class", "tooltip [ surface elevation-24 ]");
			add_location(div2, file, 138, 2, 3197);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, span0);
			append_dev(div2, t1);
			append_dev(div2, form);
			append_dev(form, label);
			append_dev(label, input0);
			append_dev(label, t2);
			append_dev(label, span1);
			append_dev(form, t4);
			append_dev(form, div0);
			append_dev(div0, button);
			append_dev(div0, t6);
			append_dev(div0, input1);
			append_dev(div2, t7);
			append_dev(div2, div1);

			if (!mounted) {
				dispose = [
					listen_dev(button, "click", /*click_handler_3*/ ctx[15], false, false, false),
					listen_dev(form, "submit", prevent_default(/*addGroup*/ ctx[9]), false, true, false),
					action_destroyer(/*groupPopperContent*/ ctx[6].call(null, div2, /*popperOptions*/ ctx[7]))
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(138:1) {#if creatingGroup}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let article;
	let div0;
	let t0;
	let div2;
	let button0;
	let t2;
	let div1;
	let t3;
	let button1;
	let t5;
	let t6;
	let current;
	let mounted;
	let dispose;
	let each_value_1 = /*links*/ ctx[2];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block0 = /*creatingLink*/ ctx[1] && create_if_block_1(ctx);
	let if_block1 = /*creatingGroup*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			article = element("article");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			div2 = element("div");
			button0 = element("button");
			button0.textContent = "Add link";
			t2 = space();
			div1 = element("div");
			t3 = space();
			button1 = element("button");
			button1.textContent = "Add group";
			t5 = space();
			if (if_block0) if_block0.c();
			t6 = space();
			if (if_block1) if_block1.c();
			attr_dev(div0, "class", "link-wrapper svelte-10efutf");
			add_location(div0, file, 76, 1, 1712);
			attr_dev(button0, "class", "hint");
			add_location(button0, file, 82, 2, 1919);
			attr_dev(div1, "class", "divider-y");
			add_location(div1, file, 89, 2, 2036);
			attr_dev(button1, "class", "hint");
			add_location(button1, file, 90, 2, 2064);
			attr_dev(div2, "class", "action-buttons svelte-10efutf");
			add_location(div2, file, 81, 1, 1888);
			attr_dev(article, "class", "svelte-10efutf");
			add_location(article, file, 75, 0, 1701);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, article, anchor);
			append_dev(article, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(article, t0);
			append_dev(article, div2);
			append_dev(div2, button0);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div2, t3);
			append_dev(div2, button1);
			append_dev(article, t5);
			if (if_block0) if_block0.m(article, null);
			append_dev(article, t6);
			if (if_block1) if_block1.m(article, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*click_handler*/ ctx[12], false, false, false),
					action_destroyer(/*linkPopperRef*/ ctx[3].call(null, button0)),
					listen_dev(button1, "click", /*click_handler_1*/ ctx[13], false, false, false),
					action_destroyer(/*groupPopperRef*/ ctx[5].call(null, button1))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*LinkItem, links, removeGroup, syncLinks*/ 1284) {
				each_value_1 = /*links*/ ctx[2];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*creatingLink*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(article, t6);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*creatingGroup*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(article, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(article);
			destroy_each(each_blocks, detaching);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $activeId;
	let $currentId;
	validate_store(activeId, "activeId");
	component_subscribe($$self, activeId, $$value => $$invalidate(16, $activeId = $$value));
	validate_store(currentId, "currentId");
	component_subscribe($$self, currentId, $$value => $$invalidate(17, $currentId = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Links", slots, []);
	const [linkPopperRef, linkPopperContent] = createPopperActions();
	const [groupPopperRef, groupPopperContent] = createPopperActions();
	const popperOptions = { placement: "top" };
	let creatingGroup = false;
	let creatingLink = false;
	let links = [];

	// -- Initialization -- \\
	activeId.subscribe(val => {
		chrome.storage.sync.get([`links-${val}`], function (result) {
			$$invalidate(2, links = result[`links-${val}`] ?? []);
			syncLinks();
		});
	});

	// -- Synchronization \\
	async function syncLinks() {
		try {
			$$invalidate(2, links);
			chrome.storage.sync.set({ [`links-${$activeId}`]: links });
		} catch(e) {
			console.error(e);
		}
	}

	// -- Functions -- \\
	async function addGroup() {
		let title = this.querySelector("input").value;
		if (links.length >= 4) return;

		links.push({
			id: set_store_value(currentId, $currentId++, $currentId),
			title,
			items: []
		});

		syncLinks();
		this.reset();
		$$invalidate(0, creatingGroup = false);
	}

	async function removeGroup(group) {
		const index = links.indexOf(group);

		if (index > -1) {
			links.splice(index, 1);
			group = group;
		}
	}

	async function addLink() {
		const groupId = Number(this.querySelector("select").value);
		const title = this.querySelector("input[type=\"text\"]").value;
		const url = this.querySelector("input[type=\"url\"]").value;
		const group = links.find(group => group.id === groupId);

		group.items.push({
			id: set_store_value(currentId, $currentId++, $currentId),
			title,
			url
		});

		syncLinks();
		this.reset();
		$$invalidate(1, creatingLink = false);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Links> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(1, creatingLink = true);
	const click_handler_1 = () => $$invalidate(0, creatingGroup = true);
	const click_handler_2 = () => $$invalidate(1, creatingLink = false);
	const click_handler_3 = () => $$invalidate(0, creatingGroup = false);

	$$self.$capture_state = () => ({
		currentId,
		activeId,
		createPopperActions,
		SortableGroup,
		LinkItem,
		linkPopperRef,
		linkPopperContent,
		groupPopperRef,
		groupPopperContent,
		popperOptions,
		creatingGroup,
		creatingLink,
		links,
		syncLinks,
		addGroup,
		removeGroup,
		addLink,
		$activeId,
		$currentId
	});

	$$self.$inject_state = $$props => {
		if ("creatingGroup" in $$props) $$invalidate(0, creatingGroup = $$props.creatingGroup);
		if ("creatingLink" in $$props) $$invalidate(1, creatingLink = $$props.creatingLink);
		if ("links" in $$props) $$invalidate(2, links = $$props.links);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		creatingGroup,
		creatingLink,
		links,
		linkPopperRef,
		linkPopperContent,
		groupPopperRef,
		groupPopperContent,
		popperOptions,
		syncLinks,
		addGroup,
		removeGroup,
		addLink,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class Links extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Links",
			options,
			id: create_fragment.name
		});
	}
}

export default Links;
//# sourceMappingURL=Links-128f1de4.js.map
