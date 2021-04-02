
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, k as validate_store, l as activeId, m as component_subscribe, v as validate_slots, p as createEventDispatcher, e as element, a as space, b as attr_dev, c as add_location, f as insert_dev, g as append_dev, q as listen_dev, r as is_function, n as noop, j as detach_dev, u as run_all, w as set_store_value, t as text, h as set_data_dev, x as set_input_value, y as prevent_default, z as projects, A as currentId, B as globals, C as validate_each_argument, D as action_destroyer, E as transition_in, F as group_outros, G as transition_out, H as check_outros, I as destroy_each, J as create_component, K as mount_component, L as destroy_component, M as prop_dev } from './main-23cac9f9.js';
import { S as SortableGroup } from './SortableGroup-47baeaf8.js';
import { c as createPopperActions } from './index-830442f8.js';

/* src/newtab/components/ProjectItem.svelte generated by Svelte v3.35.0 */
const file$1 = "src/newtab/components/ProjectItem.svelte";

// (35:2) {:else}
function create_else_block(ctx) {
	let span;
	let t_value = /*item*/ ctx[0].title + "";
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			span = element("span");
			t = text(t_value);
			attr_dev(span, "class", "svelte-1tiby9o");
			add_location(span, file$1, 35, 4, 650);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);

			if (!mounted) {
				dispose = listen_dev(
					span,
					"click",
					function () {
						if (is_function(/*setActive*/ ctx[3](/*item*/ ctx[0]))) /*setActive*/ ctx[3](/*item*/ ctx[0]).apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*item*/ 1 && t_value !== (t_value = /*item*/ ctx[0].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(35:2) {:else}",
		ctx
	});

	return block;
}

// (26:2) {#if editing}
function create_if_block$1(ctx) {
	let form;
	let input0;
	let t;
	let input1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			form = element("form");
			input0 = element("input");
			t = space();
			input1 = element("input");
			attr_dev(input0, "placeholder", "Item name");
			add_location(input0, file$1, 27, 6, 480);
			attr_dev(input1, "type", "submit");
			input1.hidden = true;
			add_location(input1, file$1, 32, 6, 593);
			add_location(form, file$1, 26, 4, 431);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, input0);
			set_input_value(input0, /*item*/ ctx[0].title);
			append_dev(form, t);
			append_dev(form, input1);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[6]),
					listen_dev(input0, "blur", /*stopEdit*/ ctx[5], false, false, false),
					listen_dev(form, "submit", prevent_default(/*stopEdit*/ ctx[5]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*item*/ 1 && input0.value !== /*item*/ ctx[0].title) {
				set_input_value(input0, /*item*/ ctx[0].title);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(26:2) {#if editing}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div1;
	let t0;
	let div0;
	let button0;
	let t2;
	let button1;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*editing*/ ctx[1]) return create_if_block$1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			if_block.c();
			t0 = space();
			div0 = element("div");
			button0 = element("button");
			button0.textContent = "edit";
			t2 = space();
			button1 = element("button");
			button1.textContent = "close";
			attr_dev(button0, "class", "material-icons [ md-14 no-gutters ] [ warning ]");
			add_location(button0, file$1, 38, 4, 744);
			attr_dev(button1, "class", "material-icons [ md-14 no-gutters ] [ alert ]");
			add_location(button1, file$1, 41, 4, 859);
			attr_dev(div0, "class", "item-actions svelte-1tiby9o");
			add_location(div0, file$1, 37, 2, 713);
			attr_dev(div1, "class", "project-item svelte-1tiby9o");
			add_location(div1, file$1, 24, 0, 384);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			if_block.m(div1, null);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, button0);
			append_dev(div0, t2);
			append_dev(div0, button1);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*startEdit*/ ctx[4], false, false, false),
					listen_dev(
						button1,
						"click",
						function () {
							if (is_function(/*dispatch*/ ctx[2]("remove", /*item*/ ctx[0]))) /*dispatch*/ ctx[2]("remove", /*item*/ ctx[0]).apply(this, arguments);
						},
						false,
						false,
						false
					)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div1, t0);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if_block.d();
			mounted = false;
			run_all(dispose);
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
	let $activeId;
	validate_store(activeId, "activeId");
	component_subscribe($$self, activeId, $$value => $$invalidate(7, $activeId = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ProjectItem", slots, []);
	let { item } = $$props;
	const dispatch = createEventDispatcher();
	let editing = false;

	function setActive(item) {
		set_store_value(activeId, $activeId = item.id, $activeId);
		open = false;
	}

	function startEdit() {
		$$invalidate(1, editing = true);
	}

	function stopEdit() {
		$$invalidate(1, editing = false);
		dispatch("sync");
	}

	const writable_props = ["item"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ProjectItem> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		item.title = this.value;
		$$invalidate(0, item);
	}

	$$self.$$set = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
	};

	$$self.$capture_state = () => ({
		activeId,
		createEventDispatcher,
		item,
		dispatch,
		editing,
		setActive,
		startEdit,
		stopEdit,
		$activeId
	});

	$$self.$inject_state = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
		if ("editing" in $$props) $$invalidate(1, editing = $$props.editing);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [item, editing, dispatch, setActive, startEdit, stopEdit, input0_input_handler];
}

class ProjectItem extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { item: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ProjectItem",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*item*/ ctx[0] === undefined && !("item" in props)) {
			console.warn("<ProjectItem> was created without expected prop 'item'");
		}
	}

	get item() {
		throw new Error("<ProjectItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<ProjectItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/newtab/components/Projects.svelte generated by Svelte v3.35.0 */

const { console: console_1 } = globals;
const file = "src/newtab/components/Projects.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[22] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[25] = list[i];
	return child_ctx;
}

// (85:1) {#if open}
function create_if_block(ctx) {
	let div4;
	let div3;
	let header;
	let h6;
	let t1;
	let button0;
	let t3;
	let div0;
	let t4;
	let div2;
	let button1;
	let t6;
	let div1;
	let t7;
	let button2;
	let t9;
	let t10;
	let current;
	let mounted;
	let dispose;
	let each_value_1 = /*$projects*/ ctx[0];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block0 = /*creatingProject*/ ctx[2] && create_if_block_2(ctx);
	let if_block1 = /*creatingGroup*/ ctx[3] && create_if_block_1(ctx);

	const block = {
		c: function create() {
			div4 = element("div");
			div3 = element("div");
			header = element("header");
			h6 = element("h6");
			h6.textContent = "Projects";
			t1 = space();
			button0 = element("button");
			button0.textContent = "close";
			t3 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			div2 = element("div");
			button1 = element("button");
			button1.textContent = "Add project";
			t6 = space();
			div1 = element("div");
			t7 = space();
			button2 = element("button");
			button2.textContent = "Add group";
			t9 = space();
			if (if_block0) if_block0.c();
			t10 = space();
			if (if_block1) if_block1.c();
			attr_dev(h6, "class", "hint");
			add_location(h6, file, 88, 5, 1948);
			attr_dev(button0, "class", "material-icons [ hint no-gutters ]");
			add_location(button0, file, 89, 5, 1984);
			attr_dev(header, "class", "svelte-soirtw");
			add_location(header, file, 87, 4, 1934);
			attr_dev(div0, "class", "modal__body svelte-soirtw");
			add_location(div0, file, 93, 4, 2113);
			add_location(button1, file, 99, 5, 2362);
			attr_dev(div1, "class", "divider-y");
			add_location(div1, file, 102, 5, 2472);
			add_location(button2, file, 103, 5, 2507);
			attr_dev(div2, "class", "action-buttons svelte-soirtw");
			add_location(div2, file, 98, 4, 2328);
			attr_dev(div3, "class", "modal [ surface elevation-1 ] svelte-soirtw");
			add_location(div3, file, 86, 3, 1886);
			attr_dev(div4, "class", "scrim svelte-soirtw");
			add_location(div4, file, 85, 2, 1863);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div3);
			append_dev(div3, header);
			append_dev(header, h6);
			append_dev(header, t1);
			append_dev(header, button0);
			append_dev(div3, t3);
			append_dev(div3, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div3, t4);
			append_dev(div3, div2);
			append_dev(div2, button1);
			append_dev(div2, t6);
			append_dev(div2, div1);
			append_dev(div2, t7);
			append_dev(div2, button2);
			append_dev(div3, t9);
			if (if_block0) if_block0.m(div3, null);
			append_dev(div3, t10);
			if (if_block1) if_block1.m(div3, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*click_handler_1*/ ctx[15], false, false, false),
					listen_dev(button1, "click", /*click_handler_2*/ ctx[17], false, false, false),
					action_destroyer(/*projectPopperRef*/ ctx[5].call(null, button1)),
					listen_dev(button2, "click", /*click_handler_3*/ ctx[18], false, false, false),
					action_destroyer(/*groupPopperRef*/ ctx[7].call(null, button2))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*ProjectItem, $projects, removeGroup*/ 2049) {
				each_value_1 = /*$projects*/ ctx[0];
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

			if (/*creatingProject*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div3, t10);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*creatingGroup*/ ctx[3]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div3, null);
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
			if (detaching) detach_dev(div4);
			destroy_each(each_blocks, detaching);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(85:1) {#if open}",
		ctx
	});

	return block;
}

// (95:5) {#each $projects as group}
function create_each_block_1(ctx) {
	let sortablegroup;
	let current;

	sortablegroup = new SortableGroup({
			props: {
				itemComponent: ProjectItem,
				group: /*group*/ ctx[25]
			},
			$$inline: true
		});

	sortablegroup.$on("remove", function () {
		if (is_function(/*removeGroup*/ ctx[11](/*group*/ ctx[25]))) /*removeGroup*/ ctx[11](/*group*/ ctx[25]).apply(this, arguments);
	});

	sortablegroup.$on("sync", /*sync_handler*/ ctx[16]);

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
			if (dirty & /*$projects*/ 1) sortablegroup_changes.group = /*group*/ ctx[25];
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
		source: "(95:5) {#each $projects as group}",
		ctx
	});

	return block;
}

// (109:4) {#if creatingProject}
function create_if_block_2(ctx) {
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
	let div0;
	let button;
	let t9;
	let input1;
	let t10;
	let div1;
	let mounted;
	let dispose;
	let each_value = /*$projects*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div2 = element("div");
			span0 = element("span");
			span0.textContent = "Create project item";
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
			div0 = element("div");
			button = element("button");
			button.textContent = "close";
			t9 = space();
			input1 = element("input");
			t10 = space();
			div1 = element("div");
			attr_dev(span0, "class", "caption hint");
			add_location(span0, file, 110, 6, 2743);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Name");
			input0.required = true;
			add_location(input0, file, 114, 9, 2891);
			add_location(span1, file, 115, 9, 2950);
			add_location(label0, file, 113, 8, 2874);
			option.__value = "";
			option.value = option.__value;
			option.disabled = true;
			option.selected = true;
			add_location(option, file, 119, 10, 3039);
			select.required = true;
			add_location(select, file, 118, 9, 3011);
			add_location(span2, file, 124, 9, 3232);
			add_location(label1, file, 117, 8, 2994);
			add_location(fieldset, file, 112, 7, 2855);
			attr_dev(button, "type", "button");
			add_location(button, file, 129, 8, 3330);
			attr_dev(input1, "class", "elevation-2");
			attr_dev(input1, "type", "submit");
			input1.value = "Add project";
			add_location(input1, file, 132, 8, 3438);
			attr_dev(div0, "class", "form-actions");
			add_location(div0, file, 128, 7, 3295);
			add_location(form, file, 111, 6, 2803);
			attr_dev(div1, "class", "arrow");
			attr_dev(div1, "data-popper-arrow", "");
			add_location(div1, file, 135, 6, 3536);
			attr_dev(div2, "class", "tooltip [ surface elevation-24 ]");
			add_location(div2, file, 109, 5, 2649);
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
			append_dev(form, div0);
			append_dev(div0, button);
			append_dev(div0, t9);
			append_dev(div0, input1);
			append_dev(div2, t10);
			append_dev(div2, div1);

			if (!mounted) {
				dispose = [
					listen_dev(button, "click", /*click_handler_4*/ ctx[19], false, false, false),
					listen_dev(form, "submit", prevent_default(/*addProject*/ ctx[12]), false, true, false),
					action_destroyer(/*projectPopperContent*/ ctx[6].call(null, div2, /*popperOptions*/ ctx[9]))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$projects*/ 1) {
				each_value = /*$projects*/ ctx[0];
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
		id: create_if_block_2.name,
		type: "if",
		source: "(109:4) {#if creatingProject}",
		ctx
	});

	return block;
}

// (121:10) {#each $projects as project}
function create_each_block(ctx) {
	let option;
	let t_value = /*project*/ ctx[22].title + "";
	let t;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = /*project*/ ctx[22].id;
			option.value = option.__value;
			add_location(option, file, 121, 11, 3134);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$projects*/ 1 && t_value !== (t_value = /*project*/ ctx[22].title + "")) set_data_dev(t, t_value);

			if (dirty & /*$projects*/ 1 && option_value_value !== (option_value_value = /*project*/ ctx[22].id)) {
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
		source: "(121:10) {#each $projects as project}",
		ctx
	});

	return block;
}

// (139:4) {#if creatingGroup}
function create_if_block_1(ctx) {
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
			span0.textContent = "Create project group";
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
			add_location(span0, file, 140, 6, 3719);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Name");
			input0.required = true;
			add_location(input0, file, 143, 8, 3846);
			add_location(span1, file, 144, 8, 3904);
			add_location(label, file, 142, 7, 3830);
			attr_dev(button, "type", "button");
			add_location(button, file, 148, 8, 3982);
			attr_dev(input1, "class", "elevation-2");
			attr_dev(input1, "type", "submit");
			input1.value = "Add group";
			add_location(input1, file, 151, 8, 4087);
			attr_dev(div0, "class", "form-actions");
			add_location(div0, file, 147, 7, 3947);
			add_location(form, file, 141, 6, 3780);
			attr_dev(div1, "class", "arrow");
			attr_dev(div1, "data-popper-arrow", "");
			add_location(div1, file, 154, 6, 4183);
			attr_dev(div2, "class", "tooltip [ surface elevation-24 ]");
			add_location(div2, file, 139, 5, 3627);
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
					listen_dev(button, "click", /*click_handler_5*/ ctx[20], false, false, false),
					listen_dev(form, "submit", prevent_default(/*addGroup*/ ctx[10]), false, true, false),
					action_destroyer(/*groupPopperContent*/ ctx[8].call(null, div2, /*popperOptions*/ ctx[9]))
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
		id: create_if_block_1.name,
		type: "if",
		source: "(139:4) {#if creatingGroup}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let article;
	let button;
	let i;
	let t1;
	let t2;
	let t3;
	let current;
	let mounted;
	let dispose;
	let if_block = /*open*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			article = element("article");
			button = element("button");
			i = element("i");
			i.textContent = "inventory_2";
			t1 = space();
			t2 = text(/*projectTitle*/ ctx[4]);
			t3 = space();
			if (if_block) if_block.c();
			attr_dev(i, "class", "material-icons");
			add_location(i, file, 80, 2, 1778);
			attr_dev(button, "class", "elevation-2");
			add_location(button, file, 79, 1, 1716);
			add_location(article, file, 78, 0, 1705);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, article, anchor);
			append_dev(article, button);
			append_dev(button, i);
			append_dev(button, t1);
			append_dev(button, t2);
			append_dev(article, t3);
			if (if_block) if_block.m(article, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[14], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*projectTitle*/ 16) set_data_dev(t2, /*projectTitle*/ ctx[4]);

			if (/*open*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*open*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(article, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(article);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
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
	let $projects;
	let $currentId;
	let $activeId;
	validate_store(projects, "projects");
	component_subscribe($$self, projects, $$value => $$invalidate(0, $projects = $$value));
	validate_store(currentId, "currentId");
	component_subscribe($$self, currentId, $$value => $$invalidate(21, $currentId = $$value));
	validate_store(activeId, "activeId");
	component_subscribe($$self, activeId, $$value => $$invalidate(13, $activeId = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Projects", slots, []);
	const [projectPopperRef, projectPopperContent] = createPopperActions();
	const [groupPopperRef, groupPopperContent] = createPopperActions();
	const popperOptions = { placement: "top" };

	// -- Members -- \\
	let open = false;

	let creatingProject = false;
	let creatingGroup = false;
	let projectTitle = "";

	// -- Initialization -- \\
	projects.subscribe(val => {
		try {
			chrome.storage.sync.set({ projects: val });
		} catch(e) {
			console.error(e);
		}
	});

	// -- Functions -- \\
	function addGroup() {
		if ($projects.length >= 8) return;
		let title = this.querySelector("input[type=\"text\"]").value;

		set_store_value(
			projects,
			$projects = [
				...$projects,
				{
					id: set_store_value(currentId, $currentId++, $currentId),
					title,
					items: []
				}
			],
			$projects
		);

		this.reset();
		$$invalidate(3, creatingGroup = false);
	}

	function removeGroup(group) {
		const index = $projects.indexOf(group);

		if (index > -1) {
			$projects.splice(index, 1);
			projects.set($projects);
		}
	}

	function addProject() {
		let groupId = Number(this.querySelector("select").value);
		let title = this.querySelector("input[type=\"text\"]").value;
		let group = $projects.find(group => group.id === groupId);

		group.items.push({
			id: set_store_value(currentId, $currentId++, $currentId),
			title
		});

		projects.set($projects);
		$$invalidate(2, creatingProject = false);
		this.reset();
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Projects> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(1, open = true);
	const click_handler_1 = () => $$invalidate(1, open = false);
	const sync_handler = () => projects.set($projects);
	const click_handler_2 = () => $$invalidate(2, creatingProject = true);
	const click_handler_3 = () => $$invalidate(3, creatingGroup = true);
	const click_handler_4 = () => $$invalidate(2, creatingProject = false);
	const click_handler_5 = () => $$invalidate(3, creatingGroup = false);

	$$self.$capture_state = () => ({
		currentId,
		activeId,
		projects,
		SortableGroup,
		ProjectItem,
		createPopperActions,
		projectPopperRef,
		projectPopperContent,
		groupPopperRef,
		groupPopperContent,
		popperOptions,
		open,
		creatingProject,
		creatingGroup,
		projectTitle,
		addGroup,
		removeGroup,
		addProject,
		$projects,
		$currentId,
		$activeId
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(1, open = $$props.open);
		if ("creatingProject" in $$props) $$invalidate(2, creatingProject = $$props.creatingProject);
		if ("creatingGroup" in $$props) $$invalidate(3, creatingGroup = $$props.creatingGroup);
		if ("projectTitle" in $$props) $$invalidate(4, projectTitle = $$props.projectTitle);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$projects, $activeId*/ 8193) {
			// -- Human readability -- \\
			$projects.forEach(projectGroup => {
				let project = projectGroup.items.find(p => p.id == $activeId);

				if (project) {
					$$invalidate(4, projectTitle = project.title);
				}
			});
		}
	};

	return [
		$projects,
		open,
		creatingProject,
		creatingGroup,
		projectTitle,
		projectPopperRef,
		projectPopperContent,
		groupPopperRef,
		groupPopperContent,
		popperOptions,
		addGroup,
		removeGroup,
		addProject,
		$activeId,
		click_handler,
		click_handler_1,
		sync_handler,
		click_handler_2,
		click_handler_3,
		click_handler_4,
		click_handler_5
	];
}

class Projects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Projects",
			options,
			id: create_fragment.name
		});
	}
}

export default Projects;
//# sourceMappingURL=Projects-027f9b15.js.map
